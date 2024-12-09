import { configureStore } from "@reduxjs/toolkit";
import PanelSlice from "./PanelSlice"
const store =configureStore({
    reducer:{
        PanelSlice
    }
})
export default store