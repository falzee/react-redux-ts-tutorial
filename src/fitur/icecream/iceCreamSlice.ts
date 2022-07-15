import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

type InitialState = {
    numOfIceCream: number
}
const initialState:InitialState = {
    numOfIceCream : 20
}

const iceCreamSlice = createSlice({
    name : 'iceCream',
    initialState,
    reducers : {
        ordered: state =>{
            state.numOfIceCream--
        },
        restocked : (state,action: PayloadAction<number>)=>{
            state.numOfIceCream += action.payload
        }
    },
    extraReducers: builder => {
    builder.addCase(cakeOrdered, state => {
        state.numOfIceCream--
    })
}
})

export default iceCreamSlice.reducer
export const { ordered, restocked } = iceCreamSlice.actions
