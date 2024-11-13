import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/features/counter/counterSlice';

const Counter = () => {

    const counter = useSelector(state => state.counter.count);
    const dispatch = useDispatch();



    return (
        <div>
            <h1 className='text-4xl font-bold text-center mb-3'>Counter {counter}</h1>
            <div className='flex justify-center align-middle'>
            <button onClick={()=> dispatch(increment())} className='bg-orange-300 px-6 py-2 mr-3'>Increment</button>
            <button onClick={()=> dispatch(decrement())} className='bg-blue-300 px-6 py-2'>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;