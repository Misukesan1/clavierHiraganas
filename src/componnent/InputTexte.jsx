import React from "react";
import { useDispatch } from "react-redux";
import { controlAffichageTexte } from "../features/hiragana";

export default function InputTexte({ stateInput }) {

  const dispatch = useDispatch()

  return (
    <>
      <input
        value={stateInput}
        onInput={(e) => dispatch(controlAffichageTexte(e.target.value))}
        type="text"
        className="input input-xl input-primary w-full"
      />
    </>
  );
}
