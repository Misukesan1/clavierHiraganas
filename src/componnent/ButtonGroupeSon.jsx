import React from "react";
import { useDispatch } from "react-redux";
import { changeAffichage } from "../features/hiragana";

export default function ButtonGroupeSon({ nomGroupe, value, hiraganas }) {

  const dispatch = useDispatch()

  return (
    <>
      <li onClick={() => dispatch(changeAffichage(hiraganas))}>
        <a className="tooltip flex flex-col" data-tip={nomGroupe}>
          <p className="text-6xl font-extrabold">{value}</p>
        </a>
      </li>
    </>
  );
}
