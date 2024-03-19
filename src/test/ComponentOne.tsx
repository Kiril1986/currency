import React from 'react'

function ComponentOne({props}) {
    
  return (
    <div>
        <form onSubmit={props.onSubmit}>
            <input value={props.order} onChange={props.onChange}/>
            <button type="submit"></button>
        </form>
    </div>
  )
}

export default ComponentOne