import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = "black"
export  const themeSlice = createSlice({
  name:"theme",
  initialState:{value:initialStateValue},
  reducers:{
    changTheme:(state , action)=>{
      state.value = action.payload;
    },
  
  }
})
export const {changTheme} = themeSlice.actions;
export default themeSlice.reducer;