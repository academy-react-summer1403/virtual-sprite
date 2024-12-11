import { configureStore } from "@reduxjs/toolkit";
import PanelSlice from "./PanelSlice";
import CommentSlice from "./CommentSlice.js"
const store =configureStore({
    reducer:{
        PanelSlice,
        CommentSlice,
    }
})
export default store