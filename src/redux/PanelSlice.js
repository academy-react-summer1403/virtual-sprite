import { createSlice } from "@reduxjs/toolkit";

const PanelSlice = createSlice({
    name:"panel",
    initialState:{pic:"",},
    reducers:{
        handlepanel:(state,action)=>{
console.log("action",action);
state.pic = action.payload;
        },
    },
});
export const {handlepanel} = PanelSlice.actions;
export default PanelSlice.reducer;