import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGreetingsApi } from '../redux/greetings/greetings'

const Greetings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetingsApi());
  }, [dispatch]);

  const message = useSelector((state) => state.greetingsReducer);
   
  return (
    <div>
        <h2 className="text-2xl text-center font-bold">Please Refresh to get a new Message</h2>
     <h1 className='font-bold text-2xl m-4 p-4'>Greeting Message: <span className='text-red-500'>{message}</span></h1>
    </div>
  )
}

export default Greetings