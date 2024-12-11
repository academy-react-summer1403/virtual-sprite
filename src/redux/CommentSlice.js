import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
    name:"comment",
    initialState:{comment:""},
    reducers:{
handlecomment:(state,action)=>{
    console.log("action",action);
    state.comment = action.payload;
},
    },

    
});
export const {handlecomment} = CommentSlice.actions;
export default CommentSlice.reducer;