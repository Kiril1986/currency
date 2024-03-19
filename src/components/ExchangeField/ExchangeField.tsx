import React from 'react'
import styles from "./ExchangeField.module.sass"
import CurrencySelect from '../CurrencySelect/CurrencySelect'
import Input from '../Input/Input'
import { CurrencyData } from './ExchangeField.props'
import CryptoCurrencySelect from '../CryptoCurrencySelect/CryptoCurrencySelect'

function ExchangeField({currencies}: CurrencyData) {
    
             return (
    <div className={styles.wrapper}>
        <div>
            <Input/>
            <CryptoCurrencySelect/>
        </div>
        <div>
            <Input/>
            {currencies && <CurrencySelect currencies={currencies}/>}
        </div>
    </div>
  )
}

export default ExchangeField