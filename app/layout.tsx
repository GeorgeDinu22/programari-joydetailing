import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.joydetailing.ro"),
  title: "Joy Detailing – Servicii Profesionale de Detailing Auto",
  description:
    "Joy Detailing oferă servicii complete de detailing auto: exterior, interior, motor, polish faruri și semi-detailing. Curățare, polish, protecție și întreținere pentru ca mașina ta să arate impecabil și să fie protejată pe termen lung.",
  keywords: [
    "detailing auto",
    "detailing exterior",
    "detailing interior",
    "polish faruri",
    "semi-detailing",
    "curățare mașini",
    "protecție caroserie",
    "întreținere motor",
    "detailing profesional",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Joy Detailing – Redă strălucirea mașinii tale cu servicii profesionale de îngrijire auto",
    description:
      "La Joy Detailing, tratăm fiecare mașină cu atenție și pasiune, oferindu-i un aspect impecabil și protecție de durată. Redescoperă plăcerea condusului ca în prima zi!",
    url: "https://www.joydetailing.ro/",
    siteName: "Joy Detailing",
    type: "website",
    locale: "ro_RO",
    images: [
      {
        url: "https://www.joydetailing.ro/whatsapp.jpg",
        width: 1200,
        height: 935,
        alt: "Joy Detailing – servicii profesionale de detailing auto",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={"h-full antialiased"}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
