import axios from 'axios'
import { createSlice, createAsyncThunk,PayloadAction } from '@reduxjs/toolkit'

//user butuh di definisikan type yang beda karena isinya ada lagi
type User = {
    id: number
    name: string
}

type InitialState = {
    loading: boolean
    users: User[]
    error: string
}
const initialState: InitialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    //tambahin props reducers
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(fetchUsers.pending,state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<User[]>) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message || 'Samting Wong'
        })
        
    }
})

export default userSlice.reducer
