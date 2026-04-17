//UseRef дозволяє нам отримати доступ до елементу, по дефолту ми можемо вказати в ньому значення що він викор 0

import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
// faMagnifyingGlass
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

// import {faStar} as {starR} from '@fortawesome/free-regular-svg-icons'

const UseRefComponent = () => {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        setInputValue(inputRef.current.value); //вивести дані які були додані. 
        inputRef.current.style.background = 'orange' 
    };

    return (
        <div className="container mt-3">
            <div className="mb-3">
                <input type="text" ref={inputRef} className="form-control" placeholder="Enter text" />
            </div>
            {/* //через ref привязуємо на наш інпут.коли інпут буде відмальовано замість 0 буде повноцінно те що треба */}
            <button onClick={handleClick} className="btn btn-primary">
                Submit 
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faMagnifyingGlass} />

            </button>
            <p className="mt-3">Input Value: {inputValue}</p>
        </div>
    );
};

export default UseRefComponent;