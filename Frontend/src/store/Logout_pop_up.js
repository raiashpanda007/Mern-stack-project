import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    visible:false
}

const Logout_pop_upSlice = createSlice({
    name:"Logout_pop_up",
    initialState,
    reducers:{
        showLogout_pop_up(state,action) {
            state.visible = action.payload
        }
    }
});
export const {showLogout_pop_up} = Logout_pop_upSlice.actions
export default Logout_pop_upSlice.reducer