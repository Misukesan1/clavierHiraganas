import { createSlice } from "@reduxjs/toolkit";
import Hiragana from "../libs/class/Hiragana";
import Katakana from "../libs/class/Katakana";

const hiraganas = new Hiragana()
const katakana = new Katakana()

const initialState = {
    listeHiraganas: hiraganas.getTousLesHiragana(),
    listeKatakanas: katakana.getTousLesKatakana(),
    affichageSymboles: undefined, // groupes de symboles à afficher
    affichageTexte: "",
    radioSymboles: false // indique si ce sont les hiraganas ou katakana à afficher
}

export const hiragana = createSlice({
    name: "hiragana",
    initialState,
    reducers: {

        /**
         * surveiller l'état du bouton afficher hiraganas / katakanas
         * @param {*} state 
         * @param {*} action 
         */
        stateBtnSymbols: (state, action) => {
            state.radioSymboles = action.payload
        },
        
        /**
         * change l'affichage des hiraganas en fonction du groupe de son sélectionné
         * @param {*} state 
         * @param {*} action 
         */
        changeAffichage: (state, action) => {
            state.affichageSymboles = action.payload
        },

        /**
         * change la valeur du champ en fonction des hiraganas de sélectionnés
         * @param {*} state 
         * @param {*} action 
         */
        changeAffichageTexte: (state, action) => {
            state.affichageTexte += action.payload
        },

        /**
         * controle du cahmp input si on entre des caractères ou qu'on efface un caractère
         * @param {*} state 
         * @param {*} action 
         */
        controlAffichageTexte: (state, action) => {
            console.log(action.payload)

            // Si on entre des caractères
            if (action.payload.length > state.affichageTexte.length) {
                state.affichageTexte += action.payload.slice(-1)
            } 
            // on efface le dernier caractère
            else {
                state.affichageTexte = state.affichageTexte.slice(0, -1)
            }

        },

        /**
         * efface un caractère du texte du champ
         * @param {*} state 
         * @param {*} action 
         */
        effacerTexte: (state, action) => {
            state.affichageTexte = ""
        },

        effacerCaractere: (state, action) => {
            state.affichageTexte = state.affichageTexte.slice(0, -1)
        }

    }
})

export const { changeAffichage, stateBtnSymbols, changeAffichageTexte, controlAffichageTexte, effacerTexte, effacerCaractere } = hiragana.actions
export default hiragana.reducer