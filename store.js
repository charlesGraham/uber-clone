import { configureStore } from "@reduxjs/toolkit"; //configures data layer 
import navReducer from "./slices/navSlice"; // "slice" of the data layer

export const store = configureStore({
    // setup global data layer
    reducer: {
        nav: navReducer,
    },
});