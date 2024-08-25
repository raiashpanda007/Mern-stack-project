import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    sidebarShow: true
}

const sidebarSlice = createSlice({
    name:"Sidebar",
    initialState,
    reducers:{
        showSidebar(state, action){
            state.sidebarShow = action.payload
        }
    }
})
export const {showSidebar} = sidebarSlice.actions
export default sidebarSlice.reducer