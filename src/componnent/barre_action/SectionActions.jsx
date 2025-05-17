
import { useDispatch, useSelector } from 'react-redux'
import { toogleRandomSymbol, toogleShowTooltip } from '../../features/app'

export default function SectionActions() {
  
  const inputRandom = useSelector((state) => state.app.randomSymbols)
  console.log("Activer la génération de symboles aléatoire : ", inputRandom) // ! log
  const showTooltip = useSelector((state) => state.app.showTooltip)
  console.log("Activer l'affichage des infos-bulles : ", showTooltip) // ! log

  const dispatch = useDispatch()

  // activer / désactiver la génération aléatoire de symboles
  const functionToggleRandomSymbol = () => {
    dispatch(toogleRandomSymbol(!inputRandom))
  }

  // activer / désactiver l'affichage des tootips
  const functionToggleShowTooltip = () => {
    dispatch(toogleShowTooltip(!showTooltip))
  }

  return (
    <>
        <div className='bg-base-200 my-5 p-5'>
            <h3 className='text-2xl text-shadow-md'>Paramètres d'apprentissage du clavier dynamique</h3>
            <div>
                Activer la génération aléatoire des symboles
                <input type="checkbox" onClick={functionToggleRandomSymbol} className="toggle toggle-sm toggle-primary ml-3" />
            </div>
            <div>
                Désactiver l'affichage de l'indication au dessus du symbole
                <input type="checkbox" onClick={functionToggleShowTooltip} className="toggle toggle-sm toggle-primary ml-3" />
            </div>
        </div>
    </>
  )
}
