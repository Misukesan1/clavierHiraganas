import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAffichageTexte } from "../features/hiragana";

export default function ButtonSymbole({ hiragana }) {

  const showTooltip = useSelector((state) => state.app.showTooltip)

  const dispatch = useDispatch();

  return (
    <>
      <li
        onClick={(e) => dispatch(changeAffichageTexte(e.currentTarget.querySelector("p").textContent))}
      >
        <a className="tooltip flex flex-col" data-tip={(showTooltip) ? null : hiragana.son}>
          <p className="text-6xl font-extrabold">{hiragana.symbole}</p>
        </a>
      </li>
    </>
  );
}
