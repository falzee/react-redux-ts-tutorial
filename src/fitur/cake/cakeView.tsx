import React from 'react'
/* import { useSelector,useDispatch } from 'react-redux' */
import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { ordered,restocked } from './cakeSlice'

export const CakeView = () => {
  const numOfCakes = useAppSelector((state)=> state.cake.numOfCakes)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={()=>dispatch(ordered())}>Order Cake</button>
      <button onClick={()=>dispatch(restocked(2))}>Restock Cakes</button>
    </div>
  )
}