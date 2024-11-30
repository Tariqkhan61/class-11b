"use client"
import React, {useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () =>{
        setCounter(counter+1)
    }
    const decrement = () =>{
      setCounter(counter-1)
  }
    
  return (
    <>
    <div className='box text-center'>
    <h1>{counter}</h1>
    <button onClick={increment} className='text-2xl width-140px height-40px
     bg-purple-600 text-white rounded-md'>
        Increment
    </button>
    <h1 className='text-2xl text-green-700 font-extrabold'>useState</h1>
    <button onClick={decrement} className='text-2xl width-140px height-40px
     bg-orange-500 text-white rounded-md'>
        Decrement
    </button>
</div>


    
    </>
  )
}

export default Counter
