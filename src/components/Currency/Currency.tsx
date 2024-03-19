import React from 'react'
import { CurrencyType } from '../../pages/Main/Main.props'
import styles from "./Currency.module.sass"

function Currency(currency: CurrencyType ) {
 
  return (
    <div className={styles.wrapper}>
        <span>{currency.description}</span>
        <span>{currency.code}</span>
        <span>{currency.rate}</span>
    </div>
  )
}

export default Currency