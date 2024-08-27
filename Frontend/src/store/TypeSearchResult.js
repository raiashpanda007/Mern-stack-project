import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type : "Videos"
}
const typeSearchResultSlice = createSlice({
    name: "searchType",
    initialState,
    reducers: {
        setType(state, action){
            state.type = action.payload
        }
    }
})
export const {setType} = typeSearchResultSlice.actions
export default typeSearchResultSlice.reducer