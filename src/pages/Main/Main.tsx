import React, { useEffect } from 'react'
import { CurrencyTuple } from './Main.props';
import Currency from '../../components/Currency/Currency';
import styles from "./Main.module.sass"
import ExchangeField from '../../components/ExchangeField/ExchangeField';
import Loader from '../../components/Loader/Loader';
import useCryptoCurrencyData from '../../hooks/useCryptoCurrencyData';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';

function Main() {
  const { data, loading, error } = useCryptoCurrencyData();
   const cryptoCurrency = useSelector((state: RootState) => state.cryptoCurrency.cryptoCurrency);

   
    console.log(data)
    if (loading) return <Loader/>;
    if (error) return <div>Error: {error.message}</div>;
    return (
    <div className={styles.wrapper}>
        <ExchangeField currencies={data}/>
    <div className={styles.currencies}>
      {cryptoCurrency === "BTC" ? (data?.map((el: CurrencyTuple) => <Currency {...el[1]} key={el[1]["code"]}/>)) : (<div>ETH</div>)}
    </div>
    </div>
  )
}

export default Main


// const [data, setData] = useState<CurrencyTuple[] | undefined>(undefined);
// const [loading, setLoading] = useState<boolean>(true);
// const [error, setError] = useState<Error | null>(null);
// const dispatch = useDispatch<AppThunkDispatch>();
// const cryptoCurrency = useSelector((state: RootState) => state.cryptoCurrency.cryptoCurrency);

// function loadData (cryptoCurrency: "BTC" | "ETH") {
//  dispatch(chooseCryptoCurrency(cryptoCurrency))
//  .then((resultAction) => {
//    console.log(resultAction)
//    const arr: CurrencyTuple[] | undefined = Object.entries(resultAction.payload.bpi)
//    setData(arr)
//    setLoading(false)
//  })
//  .catch((error) => {
//    setError(error);
//    setLoading(false)
//  })
//  }