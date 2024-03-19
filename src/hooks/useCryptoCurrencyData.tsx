import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppThunkDispatch } from '../App/redux/types';
import { CurrencyTuple } from '../pages/Main/Main.props';
import { chooseCryptoCurrency } from '../App/redux/asyncActions/cryptoCurrencyActions';
import { RootState } from '@reduxjs/toolkit/query';

type HookReturnType = {
  data: CurrencyTuple[] | undefined;
  loading: boolean;
  error: Error | null;
  loadData: (cryptoCurrency: "BTC" | "ETH") => void;
};

const useCryptoCurrencyData = (): HookReturnType => {
  const [data, setData] = useState<CurrencyTuple[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const dispatch = useDispatch<AppThunkDispatch>();
  const cryptoCurrency = useSelector((state: RootState) => state.cryptoCurrency.cryptoCurrency);
  const loadData = (cryptoCurrency: "BTC" | "ETH") => {
    dispatch(chooseCryptoCurrency(cryptoCurrency))
      .then((resultAction) => {
        const arr: CurrencyTuple[] | undefined = Object.entries(resultAction.payload.bpi);
        setData(arr);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
   
  };

  useEffect(() => {
    console.log(data)
    loadData(cryptoCurrency)
    console.log(data)
  }, [])
  return { data, loading, error, loadData };
};

export default useCryptoCurrencyData;
