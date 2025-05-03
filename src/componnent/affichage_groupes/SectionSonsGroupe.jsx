import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonGroupeSon from "../ButtonGroupeSon";

import { changeAffichage } from "../../features/hiragana";

export default function SectionSonsGroupe() {

  const hiraganas = useSelector(state => state.hiragana.listeHiraganas)
  // console.log("liste des hiraganas : ", hiraganas)

  const dispatch = useDispatch()

  const {
    voyelles,
    groupeK,
    groupeS,
    groupeT,
    groupeN,
    groupeH,
    groupeM,
    groupeY,
    groupeR,
    groupeW,
    n,
    combinaisonsY,
    ponctuation
  } = hiraganas

  return (
    <>
      <div className="bg-base-200 mt-6 py-3">
        <ul className="w-full menu menu-horizontal rounded-box gap-5 justify-center ">
            <ButtonGroupeSon nomGroupe="voyelles" value="A" hiraganas={voyelles}/>
            <ButtonGroupeSon nomGroupe="groupe K" value="K" hiraganas={groupeK}/>
            <ButtonGroupeSon nomGroupe="groupe S" value="S" hiraganas={groupeS}/>
            <ButtonGroupeSon nomGroupe="groupe T" value="T" hiraganas={groupeT}/>
            <ButtonGroupeSon nomGroupe="groupe N" value="N" hiraganas={groupeN}/>
            <ButtonGroupeSon nomGroupe="groupe H" value="H" hiraganas={groupeH}/>
            <ButtonGroupeSon nomGroupe="groupe M" value="M" hiraganas={groupeM}/>
            <ButtonGroupeSon nomGroupe="groupe Y" value="Y" hiraganas={groupeY}/>
            <ButtonGroupeSon nomGroupe="groupe R" value="R" hiraganas={groupeR}/>
            <ButtonGroupeSon nomGroupe="groupe W" value="W" hiraganas={groupeW}/>
            <ButtonGroupeSon nomGroupe="n" value="-N" hiraganas={n}/>
        </ul>
        <ul className="w-full menu menu-horizontal rounded-box gap-5 justify-center ">
          <ButtonGroupeSon nomGroupe="combinaisons Y" value="Y" hiraganas={combinaisonsY}/>
          <ButtonGroupeSon nomGroupe="ponctuation" value="..." hiraganas={ponctuation}/>
        </ul>
      </div>
    </>
  );
}
