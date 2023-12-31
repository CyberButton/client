import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const tempReducer = createSlice({
    name: 'temp',
    initialState : {
        IDOFMCQ : {}
    },
    reducers : {
        setIDOFMCQ : (state, action) => {
            // console.log(action.payload)
            state.IDOFMCQ = action.payload
            // console.log(state.IDOFMCQ)
        },
        resetIDOFMCQ : () => {
            return {
                IDOFMCQ : {}
            }
        }
    }
})

export const { setIDOFMCQ, resetIDOFMCQ } = tempReducer.actions;

export default tempReducer.reducer;