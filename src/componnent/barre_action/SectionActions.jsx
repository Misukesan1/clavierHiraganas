import { useDispatch, useSelector } from "react-redux";
import {
  toogleRandomSymbol,
  toogleShowTooltip,
  toggleMessagesConsole,
} from "../../features/app";
import { useEffect } from "react";

export default function SectionActions() {
  const inputRandom = useSelector((state) => state.app.randomSymbols);
  const showTooltip = useSelector((state) => state.app.showTooltip);
  const showConsole = useSelector((state) => state.app.showConsole);

  useEffect(() => {
    if (showConsole)
      console.log(
        "Activer la génération de symboles aléatoire : ",
        inputRandom
      ); // ! log
  }, [inputRandom]);

  useEffect(() => {
    if (showConsole)
      console.log("Activer l'affichage des infos-bulles : ", showTooltip); // ! log
  }, [showTooltip]);

  useEffect(() => {
    if (showConsole)
      console.log("Activer les messages console : ", showConsole); // ! log
  }, [showConsole]);

  const dispatch = useDispatch();

  // activer / désactiver la génération aléatoire de symboles
  const functionToggleRandomSymbol = () => {
    dispatch(toogleRandomSymbol(!inputRandom));
  };

  // activer / désactiver l'affichage des tootips
  const functionToggleShowTooltip = () => {
    dispatch(toogleShowTooltip(!showTooltip));
  };

  const functionToogleMessagesConsole = () => {
    dispatch(toggleMessagesConsole(!showConsole));
  };

  return (
    <>
      <div className="bg-base-200 my-5 p-5">
        <h3 className="text-2xl text-shadow-md font-bold">
          Paramètres d'apprentissage du clavier dynamique
        </h3>
        <div className="text-xl">
          Activer la génération aléatoire des symboles
          <input
            type="checkbox"
            onClick={functionToggleRandomSymbol}
            className="toggle toggle-sm toggle-primary ml-3"
          />
        </div>
        <p className="text-sm font-light italic">
          Vous permet d'afficher les symboles dans un ordre aléatoire à chaque
          changement de son
        </p>
        <div className="text-xl">
          Désactiver les indications du son au dessus du symbole
          <input
            type="checkbox"
            onClick={functionToggleShowTooltip}
            className="toggle toggle-sm toggle-primary ml-3"
          />
        </div>
        <p className="text-sm font-light italic">
          Ne pas afficher le nom du "son" lors de la sélection du symbole
        </p>
        <div className="text-xl">
          Désactiver les messages dans la console (développeurs)
          <input
            type="checkbox"
            onClick={functionToogleMessagesConsole}
            className="toggle toggle-sm toggle-primary ml-3"
            defaultChecked
          />
        </div>
        <p className="text-sm font-light italic">
          Informations relatives aux éléments surveillés dans la console du
          navigateur.
        </p>
      </div>
    </>
  );
}
