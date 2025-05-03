import { configureStore } from "@reduxjs/toolkit";

// features
import hiragana from "./features/hiragana"; 

export const store = configureStore({
    reducer: {
        hiragana
    }
})