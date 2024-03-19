import { createAsyncThunk } from '@reduxjs/toolkit'
import {apiBTC} from '../../../constants/api'
import {apiETH} from "../../../constants/api"

export const chooseCryptoCurrency = createAsyncThunk('crypto/getCryptoCurrency',
  async (crypto: string) => {
    try {
      if (crypto === "BTC") {
      const response = await fetch(apiBTC)
      const data = await response.json()
      console.log(data)
      return data
      } else {
        const response = await fetch(apiETH)
        const data = await response.json()
        return data
      }
    } catch (e: unknown) {
      console.error(e)
      return (e as Error).message
    }
  }
)
