import { type AppState } from './types'

export const initialState: AppState = {
  coffees: [],
  tweets: [],
  users: [],
  error: null
}

export const API_URL = import.meta.env.VITE_API_URL
