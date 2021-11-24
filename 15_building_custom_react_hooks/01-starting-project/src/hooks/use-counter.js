import {useState, useEffect} from 'react';

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(forwards){
              setCounter((prevCounter) => prevCounter + 1);  
            } else {
                setCounter(prevCounter => prevCounter - 1)
            }
        
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]); // [forward] dependencies will re-run whenever there is a changes in the forward.

    return counter
};

export default useCounter;