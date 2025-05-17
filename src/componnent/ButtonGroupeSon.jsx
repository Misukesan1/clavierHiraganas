import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAffichage } from "../features/hiragana";

export default function ButtonGroupeSon({ nomGroupe, value, hiraganas, randomMode }) {

  // const randomSymbolsMode = useSelector((state) => state.app.toogleRandomSymbol)

  const dispatch = useDispatch()

  /**
   * Générer un ordre aléatoire parmis les éléments d'un tableau
   * @param {*} array 
   * @returns 
   */
  const functionRandomSymbole = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
  }

  return (
    <>
      <li onClick={() => {
        (randomMode) ? dispatch(changeAffichage(functionRandomSymbole(hiraganas))) : dispatch(changeAffichage(hiraganas))
      }}>
        <a className="tooltip flex flex-col" data-tip={nomGroupe}>
          <p className="text-6xl font-extrabold">{value}</p>
        </a>
      </li>
    </>
  );
}
