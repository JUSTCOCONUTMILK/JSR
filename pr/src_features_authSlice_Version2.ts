import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  name: string
  email: string
}

interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isAuthenticated = true
      state.user = action.payload
    },
    logout(state) {
      state.isAuthenticated = false
      state.user = null
    },
    register(state, action: PayloadAction<User>) {
      state.isAuthenticated = true
      state.user = action.payload
    },
  },
})

export const { login, logout, register } = authSlice.actions
export default authSlice.reducer