import React from 'react'
import cryptoCurrencies from '../../constants/constants'
import { useDispatch } from 'react-redux';
import { chooseCryptoCurrency } from '../../App/redux/asyncActions/cryptoCurrencyActions';
import { AppThunkDispatch } from '../../App/redux/types';


function CryptoCurrencySelect() {
  const dispatch = useDispatch<AppThunkDispatch>();

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedCurrency = event.target.value;
    dispatch(chooseCryptoCurrency(selectedCurrency));
  }

  return (
    <>
      <select onChange={onChange}>
        {cryptoCurrencies && cryptoCurrencies.map((el: string) =>
          <option key={el} value={el}>{el}</option>
        )}
      </select>
    </>
  )
}


export default CryptoCurrencySelect