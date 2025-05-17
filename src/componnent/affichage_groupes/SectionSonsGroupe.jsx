import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonGroupeSon from "../ButtonGroupeSon";

import { changeAffichage } from "../../features/hiragana";

export default function SectionSonsGroupe() {

  const hiraganas = useSelector((state) => state.hiragana.listeHiraganas);
  const katakanas = useSelector((state) => state.hiragana.listeKatakanas)
  const stateSymbols = useSelector((state) => state.hiragana.radioSymboles)
  const showConsole = useSelector((state) => state.app.showConsole);

  useEffect(() => {
    if (showConsole) {
      console.log("liste des hiraganas : ", hiraganas) // ! log
      console.log("liste des katakanas : ", katakanas) // ! log
      console.log("Activer l'affichage des katakanas : ", stateSymbols) // ! log
    }
  }, [])

  const randomSymbols = useSelector((state) => state.app.randomSymbols)

  // destructuration des hiraganas || katakanas
  const {
    voyelles,
    petitesVoyelles,
    groupeK,
    groupeS,
    groupeT,
    groupeN,
    groupeH,
    groupeM,
    groupeY,
    petitsY,
    groupeR,
    groupeW,
    petitW,
    petitTsu,
    n,
    combinaisonsY,
    ponctuation,
  } = (stateSymbols) ? katakanas : hiraganas ;

  return (
    <>
      <div className="bg-base-200 mt-6 py-3">
        <ul className="w-full menu menu-horizontal rounded-box gap-5 justify-center ">
          <ButtonGroupeSon
            nomGroupe="voyelles"
            value="A"
            hiraganas={voyelles}
            randomMode={randomSymbols}
          />
                    <ButtonGroupeSon
            nomGroupe="petites voyelles"
            value="a"
            hiraganas={petitesVoyelles}
            randomMode={randomSymbols}
          />
          <ButtonGroupeSon nomGroupe="groupe S" value="S" hiraganas={groupeS} randomMode={randomSymbols}/>
          <ButtonGroupeSon nomGroupe="groupe K" value="K" hiraganas={groupeK} randomMode={randomSymbols}/>
          <ButtonGroupeSon nomGroupe="groupe T" value="T" hiraganas={groupeT} randomMode={randomSymbols}/>
          <ButtonGroupeSon nomGroupe="groupe N" value="N" hiraganas={groupeN} randomMode={randomSymbols}/>
          <ButtonGroupeSon nomGroupe="groupe H" value="H" hiraganas={groupeH} randomMode={randomSymbols}/>
          <ButtonGroupeSon nomGroupe="groupe M" value="M" hiraganas={groupeM} randomMode={randomSymbols}/>
          <ButtonGroupeSon nomGroupe="groupe Y" value="Y" hiraganas={groupeY} randomMode={randomSymbols}/>
          <ButtonGroupeSon nomGroupe="petits Y" value="y" hiraganas={petitsY} randomMode={randomSymbols}/>
          <ButtonGroupeSon nomGroupe="groupe R" value="R" hiraganas={groupeR} randomMode={randomSymbols}/>
          <ButtonGroupeSon nomGroupe="groupe W" value="W" hiraganas={groupeW} randomMode={randomSymbols}/>
          <ButtonGroupeSon nomGroupe="petit W" value="w" hiraganas={petitW} />
          <ButtonGroupeSon nomGroupe="son de coupure" value="tsu" hiraganas={petitTsu} />
          <ButtonGroupeSon nomGroupe="n" value="-N" hiraganas={n} />
        </ul>
        <ul className="w-full menu menu-horizontal rounded-box gap-5 justify-center ">
          <ButtonGroupeSon
            nomGroupe="combinaisons Y"
            value="Y"
            hiraganas={combinaisonsY}
            randomMode={randomSymbols}
          />
          <ButtonGroupeSon
            nomGroupe="ponctuation"
            value="..."
            hiraganas={ponctuation}
          />
        </ul>
      </div>
    </>
  );
}
