import React from "react";
import ButtonSymbole from "../ButtonSymbole";
import { useSelector } from "react-redux";

export default function SectionAffichage() {
  const affichageHiragana = useSelector(
    (state) => state.hiragana.affichageHiragana
  );
  // console.log("affichage hiragana : ", affichageHiragana);
  
  return (
    <>
      {affichageHiragana && (
        <div className="bg-base-200 mb-5 py-3">
          <ul className="w-full menu menu-horizontal rounded-box gap-5 justify-center ">
            {affichageHiragana.map((hiragana, index) => (
              <ButtonSymbole key={index} hiragana={hiragana}/>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
