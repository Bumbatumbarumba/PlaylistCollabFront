import { createSlice } from '@reduxjs/toolkit'

const validloginSlice = createSlice({
    name: "validlogin",
    initialState: {
        isLoginValid: false
    },
    reducers: {
        setValidation: (state, action) => {
            state.isLoginValid = action.payload
        }
    }
})

export const { setValidation } = validloginSlice.actions
export default validloginSlice.reducer