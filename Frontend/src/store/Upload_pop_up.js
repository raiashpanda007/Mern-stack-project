import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    visible: false
}

const upload_pop_upSlice = createSlice({
    name:"Upload_pop_up",
    initialState,
    reducers:{
        showUpload_pop_up(state, action){
            state.visible = action.payload
        }
    }
});
export const {showUpload_pop_up} = upload_pop_upSlice.actions
export default upload_pop_upSlice.reducer