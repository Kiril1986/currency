import { configureStore } from '@reduxjs/toolkit'

import cryptoCurrencyReducer from './slices/cryptoCurrencySlice'

const store = configureStore({
  reducer: {
    cryptoCurrency: cryptoCurrencyReducer
     // errorState: errorReducer
  }
})

export default store
