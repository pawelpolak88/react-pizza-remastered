import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/CountSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})