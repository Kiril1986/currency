import React, { useState } from 'react'

function ComponentTwo({ordersProps}) {
  console.log(ordersProps)

  return (
    <div>
        {ordersProps.orders && ordersProps.orders.map((el) => {
           return <div key={el}>
            <div>{el}</div>
            <input type="checkbox" checked={ordersProps.checked} onChange={ordersProps.onChangeCheckbox}/>
           </div>
        })}
    </div>
  )
}

export default ComponentTwo