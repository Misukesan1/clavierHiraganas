import { createSlice } from "@reduxjs/toolkit";
import Hiragana from "../libs/class/Hiragana";

const hiraganas = new Hiragana()

const initialState = {
    listeHiraganas: hiraganas.getTousLesHiragana(),
    affichageHiragana: undefined,
    affichageTexte: ""
}

export const hiragana = createSlice({
    name: "hiragana",
    initialState,
    reducers: {
        /**
         * change l'affichage des hiraganas en fonction du groupe de son sélectionné
         * @param {*} state 
         * @param {*} action 
         */
        changeAffichage: (state, action) => {
            state.affichageHiragana = action.payload
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
         * controle du chmp input si on entre des caractères ou qu'on efface un caractère
         * @param {*} state 
         * @param {*} action 
         */
        controlAffichageTexte: (state, action) => {

            // Si on entre des caractères
            if (action.payload.length > state.affichageTexte.length) {
                state.affichageTexte += action.payload.slice(-1)
            } 
            // on efface le dernier caractère
            else {
                state.affichageTexte = state.affichageTexte.slice(0, -1)
            }

        },

        effacerTexte: (state, action) => {
            state.affichageTexte = ""
        }

    }
})

export const { changeAffichage, changeAffichageTexte, controlAffichageTexte, effacerTexte } = hiragana.actions
export default hiragana.reducer