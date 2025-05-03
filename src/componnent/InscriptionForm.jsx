import React from "react";
import { useState } from "react";

import { EyeSlashIcon, EyeIcon } from "@heroicons/react/16/solid";

export default function InscriptionForm() {
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form
        className="w-full max-w-lg mx-auto p-6 flex flex-col gap-6"
        onSubmit={onSubmit}
      >

        <h2 className="text-3xl font-bold text-center">Créer un compte</h2>

        <p className="text-center">
          Déjà un compte ?{" "}
          <a href="/login" className="text-primary hover:underline">
            Connexion
          </a>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nom"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Prénom / Pseudo"
            className="input input-bordered w-full"
          />
        </div>

        <input
          type="email"
          placeholder="Adresse email"
          className="input input-bordered w-full"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            className="input input-bordered w-full pr-10"
          />
          <button
            type="button"
            className="absolute right-2 top-2 opacity-60"
          >

            {/* Input switch du password */}
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input 
                type="checkbox" 
                onChange={() => setShowPassword(!showPassword)}
              />

              <EyeIcon className="swap-on h-6 w-6 z-10 fill-current" />
              <EyeSlashIcon className="swap-off h-6 w-6 z-10 fill-current" />

            </label>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox" required />
          <span>
            J'accepte les{" "}
            <a href="/terms" className="text-primary hover:underline">
              Termes & Conditions
            </a>
          </span>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Créer un compte
        </button>

        <div className="divider">Ou s'enregistrer avec</div>

        <button
          type="button"
          className="btn btn-outline w-full flex items-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continuer avec Google
        </button>
      </form>
    </>
  );
}
