import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "token"
}
const tokenSlice = createSlice({
          name: "token",
          initialState,
          reducers:{
            add: (state, action) =>{
               state.value = action.payload;
            },
            remove: (state) =>{
              state.value = '';

            }
          }
})

export const {add, remove} = tokenSlice.actions;
export default tokenSlice.reducer
