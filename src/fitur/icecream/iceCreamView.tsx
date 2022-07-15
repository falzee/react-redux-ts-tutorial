import React, { useState } from 'react'
import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { ordered,restocked } from './iceCreamSlice'

export const IceCreamView = () => {
    const [value,SetValue] = useState(1)
    const numOfIceCream = useAppSelector((state)=> state.iceCream.numOfIceCream)
    const dispatch = useAppDispatch()
    return (
        <div>
        <h2>Number of icecream - {numOfIceCream}</h2>
        <button onClick={()=>dispatch(ordered())}>Order icecream</button>
        <button onClick={()=>dispatch(restocked(value))}>Restock icecream</button>
        <input 
            type="number"
            value={value}
            onChange={(event)=> SetValue(parseInt(event.target.value))}
            min="1"
         />
        </div>
    )
}