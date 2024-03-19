import { createSlice } from "@reduxjs/toolkit";
import { CryptoState } from "../types";
import { chooseCryptoCurrency } from "../asyncActions/cryptoCurrencyActions";

const initialState: CryptoState = {
    cryptoCurrency: "BTC",
    loading: false,
    error: null
}

const cryptoCurrencySlice = createSlice({
    name: "cryptoCurrency",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(chooseCryptoCurrency.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(chooseCryptoCurrency.fulfilled, (state, action) => {
                state.loading = false;
                state.cryptoCurrency = action.payload;
            })
            .addCase(chooseCryptoCurrency.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
    reducers: {
              },
    
})

export default cryptoCurrencySlice.reducer;