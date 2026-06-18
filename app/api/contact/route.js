import { NextResponse } from "next/server";
import { redisRateLimit } from "../../../utils/redis";
import { Ratelimit } from "@upstash/ratelimit";

const cache = new Map();

const redis = new Ratelimit({
    redis: redisRateLimit,
    limiter: Ratelimit.slidingWindow(4, "60 s"),
    ephemeralCache: cache,
    analytics: false,
});

export async function POST(req) {
    try{

        const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "127.0.0.1";
        const result = await redis.limit(`contact_${ip}`);
        if(!result.success){
            return NextResponse.json({
                error:"Prea multe încercări! Așteptați câteva momente."
            },{
                status:429
            })
        }

        const body = await req.json();
        const {nume,telefon,tokenTurnstile} = body;

        if(!nume || nume.trim().length < 3 || !telefon || !tokenTurnstile){
            return NextResponse.json({
                error:"Datele trimise nu sunt valide. Verificați formularul și încercați din nou."
            },{
                status:400
            })
        }


        const cloudflareRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                secret:process.env.TURNSTILE_SECRET_KEY,
                response:tokenTurnstile
            })
        });
        
        const cloudflareData = await cloudflareRes.json();
        if(!cloudflareData.success){
            return NextResponse.json({
                error:"Verificarea de securitate a eșuat. Reîncărcați pagina și încercați din nou."
            },{
                status:400
            })
        };

        const oraTrimiterii = new Date().toLocaleDateString("ro-RO",{
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Europe/Bucharest"
        });

const template = `
🔔 *Ai primit o cerere nouă!*

👤 *Nume client:* ${nume}

📞 *Număr de telefon:* ${telefon}

🕒 *Ora trimiterii:* ${oraTrimiterii}
  `.trim()

        const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

        const response = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                chat_id:`${process.env.TELEGRAM_CHAT_ID}`,
                text: template,
                parse_mode: "Markdown",
            })
        });

        const data = await response.json();
        if(!data.ok){
            return NextResponse.json({
                error:"Nu am putut trimite cererea. Vă rugăm să încercați din nou."
            },{
                status:502
            })
        }
        else{
            return NextResponse.json({
                message:"Am trimis formularul!"
            },{
                status:200
            })
        }
    }catch(err){
        console.error("A aparut o eroare neasteptata: ",err?.message)
        return NextResponse.json({
                error:"A apărut o eroare neașteptată. Vă rugăm să încercați din nou."
            },{
                status:500
            })
    }
}