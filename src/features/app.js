import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    randomSymbols: false,
    showTooltip: false
}

export const app = createSlice({
    name: "app",
    initialState,
    reducers: {
        toogleRandomSymbol: (state, action) => {
            state.randomSymbols = action.payload
        },
        toogleShowTooltip: (state, action) => {
            state.showTooltip = action.payload
        },
    }
})

export const { toogleRandomSymbol, toogleShowTooltip } = app.actions

export default app.reducer