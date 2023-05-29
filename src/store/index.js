import { configureStore } from '@reduxjs/toolkit'
import userDetailReducer from '../features/UserDetailsSlice'

export const store = configureStore({
    reducer:{
        userData:userDetailReducer
    } 
})