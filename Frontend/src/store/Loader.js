import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    isLoading : false
}

const loader = createSlice({
    name:'Loader',
    initialState: intialState,
    reducers:{
        setLoading(state, action){
            state.isLoading = action.payload
        }
    }
})

export const {setLoading} = loader.actions
export default loader.reducer;