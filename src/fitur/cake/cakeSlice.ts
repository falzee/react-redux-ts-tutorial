import { createSlice,PayloadAction } from '@reduxjs/toolkit'

//yg dirubah
//1 tambahin type buat initialstate
//2 tambahin Payload Action buat type di action (ln.22) jangan lupa type return<>
//buat type initialstate
type InitialState = {
    numOfCakes: number
}
const initialState: InitialState = {
    numOfCakes : 10
}

const cakeSlice = createSlice({
    name : 'cake',
    initialState,
    reducers : {
        ordered: state =>{
            state.numOfCakes--
        },
        restocked : (state,action: PayloadAction<number>)=>{
            state.numOfCakes += action.payload
        }
    },
    
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions