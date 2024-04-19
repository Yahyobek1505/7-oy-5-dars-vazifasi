import { createSlice } from "@reduxjs/toolkit";
const initialState ={
  value:[]
}
const userSlice = createSlice({
         name:  "user",
         initialState,
         reducers:{
          add:  (state, actions)  => {
            let copied =JSON.parse(JSON.stringify(state.value))
            copied.push(actions.payload)
            state.value = copied;
          },
          remove:  () => {

          },
          edit:  () => {

          },
          
         }
})
export const {add, remove, edit} = userSlice.actions
export default userSlice.reducer;
