import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import transactionReducer from './features/transactionSlice'
import goalReducer from './features/goalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer,
    goals: goalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
