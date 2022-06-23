import { configureStore } from "@reduxjs/toolkit";
import agencyReducer from "./agencySlice"

export const store = configureStore({
    reducer: {
        agency : agencyReducer
    },
})
