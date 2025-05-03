import { useDispatch, useSelector } from "react-redux";
import { effacerTexte } from "../../features/hiragana";

import InputTexte from "../InputTexte";
import Button from "../Button";

export default function SectionTexte() {

  const valeurTexte = useSelector(state => state.hiragana.affichageTexte)
  // console.log("texte à afficher : ", valeurTexte)

  const dispatch = useDispatch()

  const viderTexte = () => {
    dispatch(effacerTexte())
  }

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

  return (
    <>
      <section className="bg-base-200 mt-5">
        <div className="w-4xl p-8 mx-auto">
          <InputTexte stateInput={valeurTexte} />
          <div className="flex gap-4 justify-center mt-3">
            <Button value="Copier" onClick={copierTexte} />
            <Button value="Effacer" onClick={viderTexte} />
          </div>
        </div>
      </section>
    </>
  );
}
