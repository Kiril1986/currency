import React, { useState } from 'react'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'

function ComponentThree() {
    const [ order, setOrder] = useState("")
    const [ orders, setOrders ] = useState([])
    const [checked, setChecked ] = useState(false)

    function onChange (event) {
        
        event.preventDefault()
        setOrder(event.target.value)
        console.log(order)
    }

    function onSubmit (event) {
        event.preventDefault()
        localStorage.setItem("order", JSON.stringify(orders))
        const newOrders = [...orders, order]
        setOrders(newOrders)
    }

    function onChangeCheckbox (event) {
        event?.preventDefault()
        if (checked) {
            setChecked(false)
        }
        else {
            setChecked(true)
        }
    }

    const props = {
        onChange: onChange,
        onSubmit: onSubmit,
        order: order
    }
    
    const ordersProps = {
        orders: orders,
        onChangeCheckbox: onChangeCheckbox,
        checked: checked
    }
  return (
    <div>
        <ComponentOne props={props} />
        <ComponentTwo ordersProps={ordersProps} />

    </div>
  )
}

export default ComponentThree