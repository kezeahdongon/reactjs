import {useEffect, useRef, useState} from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid){
      console.log('Name input is valid!');
    }
  }, [enteredNameIsValid])

  const nameInputChangehandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return;
    }
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('');
  };

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsValid 
    ? 'form-control invalid' 
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef} 
          type='text' 
          id='name' 
          onChange={nameInputChangehandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
