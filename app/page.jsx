"use client";

import { useRef, useState } from "react";
import LoadingSpinner from './LoadingSpinner';
import { Turnstile } from '@marsidev/react-turnstile'
import Link from "next/link";

export default function Home() {

  const [hasSended,setHasSended] = useState(false);
  const [errorFetch,setErrorFetch] = useState("");
  const [loading,setLoading] = useState(false);

  const [formData,setFormData] = useState({
    nume: "",
    telefon: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [captchaToken, setCaptchaToken] = useState();
  const turnstileRef = useRef(null);

  const [errors, setErrors] = useState({
    nume: "",
    telefon: "",
    termeni: "",
  });

  const handleTokenReset = () => {
    setCaptchaToken(null);
    if(turnstileRef?.current){
      turnstileRef?.current.reset();
    }
  }

  const handleReset = () => {
    setHasSended(false);
    setFormData({ nume: "", telefon: "" });
    setIsChecked(false);
    setErrors({ nume: "", telefon: "", termeni: "" });
    setErrorFetch("");

    handleTokenReset();
  }

  const validate = () => {
    const nextErrors = {
      nume: "",
      telefon: "",
      termeni: "",
    };

    if (!formData.nume.trim()) {
      nextErrors.nume = "Numele este obligatoriu.";
    } else if (formData.nume.trim().length < 3) {
      nextErrors.nume = "Numele trebuie sa aiba cel putin 3 caractere.";
    }

    const telefon = formData.telefon.trim();
    if (!telefon) {
      nextErrors.telefon = "Numarul de telefon este obligatoriu.";
    } else if (!/^(\+4)?07\d{8}$/.test(telefon.replace(/[\s.-]/g, ""))) {
      nextErrors.telefon = "Introdu un numar de telefon valid (ex: 07xxxxxxxx).";
    }

    if (!isChecked) {
      nextErrors.termeni = "Trebuie sa accepti Politica de Confidentialitate.";
    }

    setErrors(nextErrors);
    return !nextErrors.nume && !nextErrors.telefon && !nextErrors.termeni;
  };

  const formatPhone = (value) => {
    let digits = value.replace(/\D/g, "");
    // normalizeaza prefixele de tara (autofill pe mobil da des +40 / 0040) la forma locala 07...
    if (digits.startsWith("0040")) digits = "0" + digits.slice(4);
    else if (digits.startsWith("40")) digits = "0" + digits.slice(2);
    digits = digits.slice(0, 10);
    const parts = [digits.slice(0, 4), digits.slice(4, 7), digits.slice(7, 10)];
    return parts.filter(Boolean).join("-");
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    const nextValue = name === "telefon" ? formatPhone(value) : value;
    setFormData((prev) => ({
      ...prev,
      [name]: nextValue
    }))
    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }))
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (!captchaToken) {
      setErrorFetch("Așteptați finalizarea verificării de securitate.");
      return;
    }

    setLoading(true);
    setErrorFetch('');

  try{
      const res = await fetch("/api/contact",{
        method:"POST",
        headers:{
          "Content-Type": "applications/json",
        },
        body:JSON.stringify({
          nume:formData.nume,
          telefon:formData.telefon.replace(/\D/g, ""),
          tokenTurnstile:captchaToken
        })
      })

      const data = await res.json();
      if(!res.ok){
        setErrorFetch(data.error)
      }
      else{
        setHasSended(true);
      }
    }catch(err){
       setErrorFetch(err?.message)
    }
    finally{
      handleTokenReset();
      setLoading(false);
    }
  }

  return (
    <div className="bodyPage">

    {!hasSended ? (
      <>
      <h1><span>Joy</span> Detailing</h1>

      <p className="textPage">Completează formularul de mai jos pentru a fi contactat de un membru din echipa noastră</p>
      <form className="containerContact" onSubmit={handleSend} noValidate>
        <div className="formGroup">
          <input onChange={handleChange} value={formData.nume} type="text" id="nume" name="nume" placeholder=" " aria-invalid={!!errors.nume} />
          <label htmlFor="nume">Nume</label>
          {errors.nume && <span className="errorMessage">{errors.nume}</span>}
        </div>

        <div className="formGroup">
          <input onChange={handleChange} value={formData.telefon} type="tel" inputMode="numeric" autoComplete="tel" maxLength={12} id="telefon" name="telefon" placeholder=" " aria-invalid={!!errors.telefon} />
          <label htmlFor="telefon">Numar de telefon</label>
          {errors.telefon && <span className="errorMessage">{errors.telefon}</span>}
        </div>

        <div className="checkBoxGroup">
          <label className="checkBox">
            <input
              onChange={(e) => {
                setIsChecked(e.target.checked);
                setErrors((prev) => ({ ...prev, termeni: "" }));
              }}
              checked={isChecked}
              type="checkbox"
              name="accept_termeni"
            />
            <span className="checkmark"></span>
            <p className="textCheckbox">Sunt de acord cu prelucrarea datelor mele conform <Link href="/politica-de-confidentialitate" target="_blank" rel="noopener noreferrer">Politicii de Confidentialitate</Link></p>
          </label>
          {errors.termeni && <span className="errorMessage">{errors.termeni}</span>}
        </div>

        {errorFetch && <div className="error">{errorFetch}</div>}

        <button type="submit" disabled={loading}>
          {loading ? <LoadingSpinner text={"Se trimite..."}/> : "Trimite cererea"}
        </button>

      <div>
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          onSuccess={(token) => {
            setCaptchaToken(token)
          }}
        />
      </div>
      </form>
    </>
    ) : (
      <div className="containerContact successBox">
          <svg className="successCheck" viewBox="0 0 52 52" width="72" height="72" aria-hidden="true">
            <circle className="successCheckCircle" cx="26" cy="26" r="24" fill="none" />
            <path className="successCheckMark" fill="none" d="M14 27 l8 8 l16 -16" />
          </svg>
        <p className="successText">Un membru Joy Detailing te va contacta în curând.</p>
        <div className="contactAgain" onClick={handleReset}>Trimite o cerere nouă</div>
      </div>
    )
  }
    </div>
  );
}
