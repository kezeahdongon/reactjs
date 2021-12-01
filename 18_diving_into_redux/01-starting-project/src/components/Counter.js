import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.showCounter);
  const counter = useSelector((state) => state.counter.counter); 
  // useSelector() calls a function w/c is basically determines what piece of data we want to extract from store.

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };

  const increaseByFiveHandler = () => {
    dispatch(counterActions.increaseByFive())
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };

  const decreaseByFiveHandler = () => {
    dispatch(counterActions.decreaseByFive())
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5))
  };
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={increaseByFiveHandler}>Increase by 5</button>
        <button onClick={decreaseByFiveHandler}>Decrease by 5</button>
      </div>
      <div>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decreaseHandler}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;