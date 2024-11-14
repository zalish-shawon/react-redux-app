/* eslint-disable no-unused-vars */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from '../redux/features/counter/counterSlice';

const Counter = () => {

    const counter = useSelector(state => state.counter.count);
    const dispatch = useDispatch();



    return (
        <div>
            <h1 className='text-4xl font-bold text-center mb-3'>Counter {counter}</h1>
            <div className='flex justify-center align-middle'>
            <button onClick={()=> dispatch(incrementByValue(5))} className='bg-orange-300 px-6 py-2 mr-3'>Increment by 5</button>
            <button onClick={()=> dispatch(decrement())} className='bg-blue-300 px-6 py-2'>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;

