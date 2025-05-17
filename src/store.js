import { configureStore } from "@reduxjs/toolkit";

// features
import hiragana from "./features/hiragana"; 
import app from "./features/app";

export const store = configureStore({
    reducer: {
        hiragana,
        app
    }
})