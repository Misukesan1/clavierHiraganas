import { useDispatch, useSelector } from "react-redux";
import { changeAffichage, effacerTexte, effacerCaractere, stateBtnSymbols } from "../../features/hiragana";

import InputTexte from "../InputTexte";
import Button from "../Button";
import { useEffect } from "react";

export default function SectionTexte() {

  const valeurTexte = useSelector(state => state.hiragana.affichageTexte)
   const showConsole = useSelector((state) => state.app.showConsole);

   useEffect(() => {
    if (showConsole) console.log("texte à afficher : ", valeurTexte) // ! log
   }, [valeurTexte])

  const stateSymbols = useSelector((state) => state.hiragana.radioSymboles)

  const dispatch = useDispatch()

  const copierTexte = (button) => {
    navigator.clipboard.writeText(valeurTexte)
    .then(() => {
      button.disabled = true
      button.textContent = "Texte copié"
      setTimeout(() => { 
        button.textContent = "Copier" 
        button.disabled = false
      }, 1000)
    })
    .catch(err => {
      console.error("Erreur de copie :", err);
    });
  }

  const activeKatakana = () => {
    dispatch(stateBtnSymbols(!stateSymbols))
    dispatch(changeAffichage(undefined)) // enlever les symboles d'affichés actuelement
  }

  return (
    <>
      <section className="bg-base-200 mt-5">
        <div className="w-10/12 p-8 mx-auto">
        <p className="font-light italic">Commencez à sélectionner des symboles pour les afficher dans le champ.</p>
          <InputTexte stateInput={valeurTexte} />
          <div className="flex justify-between mt-3">
            <div>
              <Button value="Copier" onClick={copierTexte} className="btn btn-soft btn-primary mr-1"/>
              <Button value="Effacer tout" onClick={() => dispatch(effacerTexte())} className="btn btn-soft btn-secondary ml-1"/>
              <Button value="Effacer un" onClick={() => dispatch(effacerCaractere())} className="btn btn-soft btn-secondary ml-1"/>
            </div>
            <Button value="Katakanas" onClick={activeKatakana} className={`btn ${(stateSymbols) ? '' : 'btn-soft' } btn-accent`}/>
          </div>
        </div>
      </section>
    </>
  );
}
