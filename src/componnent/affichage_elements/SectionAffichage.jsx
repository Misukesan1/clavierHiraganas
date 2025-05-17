import React from "react";
import ButtonSymbole from "../ButtonSymbole";
import { useSelector } from "react-redux";

export default function SectionAffichage() {
  const affichageSymboles = useSelector(
    (state) => state.hiragana.affichageSymboles
  );
  
  return (
    <>
      {affichageSymboles && (
        <div className="bg-base-200 mb-5 py-3">
          <ul className="w-full menu menu-horizontal rounded-box gap-5 justify-center ">
            {affichageSymboles.map((hiragana, index) => (
              <ButtonSymbole key={index} hiragana={hiragana}/>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
