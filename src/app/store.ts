import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../fitur/cake/cakeSlice'
import iceCreamReducer from '../fitur/icecream/iceCreamSlice'
import userReducer from '../fitur/user/userSlice'

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
//export root store dan dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch