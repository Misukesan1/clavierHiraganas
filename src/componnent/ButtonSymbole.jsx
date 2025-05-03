import React from "react";
import { useDispatch } from "react-redux";
import { changeAffichageTexte } from "../features/hiragana";

export default function ButtonSymbole({ hiragana }) {

  const dispatch = useDispatch()

  return (
    <>
      <li onClick={e => dispatch(changeAffichageTexte(e.currentTarget.querySelector("p").textContent))}>
        <a className="tooltip flex flex-col" data-tip={hiragana.son}>
          <p className="text-6xl font-extrabold">{hiragana.symbole}</p>
        </a>
      </li>
    </>
  );
}
