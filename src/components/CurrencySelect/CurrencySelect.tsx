import React from 'react'
import { CurrencyData } from '../ExchangeField/ExchangeField.props'
import { CurrencyTuple } from '../../pages/Main/Main.props'


function CurrencySelect({currencies}: CurrencyData) {

    return (
    <>
    <select>
        {currencies && currencies.map((el: CurrencyTuple) =>        
          <option key={el[1].code} value={el[1].code}>{el[1].description}</option>
        )}
    </select>
    </>
  )
}

export default CurrencySelect