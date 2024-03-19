import { useDispatch } from "react-redux";
import type store from "./store";
// import { ThunkDispatch } from "redux-thunk";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;

export type LoginError = {
  response: IData;
};

export type IData = {
  message: string;
};

export interface CryptoState {
  cryptoCurrency: "BTC" | "ETH", 
  loading: boolean,
  error: null | string | undefined
}

export interface CoffeeAction {
  type: "CHOOSE_CRYPTO";
  payload: "BTC" | "ETH"
}

export type ErrorAction =
  | { type: "SET_ERROR"; payload: string }
  | { type: "CLEAR_ERROR"; payload: null };

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
