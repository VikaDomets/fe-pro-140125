import React, {useState} from 'react';

function Counter() {
    // let counter = 0
    let [counterValue, setCounterValue] = useState(0); // ounterValue змінна яка буде зберігати стан, setCounterValue сеттер встан певне знач
    function upValue(){
        // counterValue++;
        setCounterValue(counterValue=>counterValue+1) // де ми вказуємо нове значення або стрілкова функція або ф-ція 
    }
    function downValue(){
        setCounterValue(counterValue-1)

    }
    let [showState, setShowState] = useState(false) // ств змінної, поч знач false
    function changeShowState(){
        setShowState(showState=>!showState) // змінює showState і повертає протилежне знач(будь-яка перевірка що ввів зробив користуач()
    }

    let [userData, setUserData] = useState('')
    function changeUserData(e){ // зміна
        setUserData(userData=>e.target.value)
    }
    return (
        <div className='row'>
            <div className="col-6 d-flex mx-auto text-center">
                <button onClick={upValue} className="btn btn-danger"> 
                    +
                </button>
                {/* onClick={upValue} дод обробки подій */}

                {/* {counterValue} */}
                {counterValue>0 ? counterValue : 'Too low value'}

                <button onClick={downValue} className="btn btn-danger">
                   -
                </button>

            </div>
            {/* // приклад виклику ShowState */}
            <div className="row"> 
                <div className="col-6 mx-auto text-center">
                    <button onClick={changeShowState} className="btn btn-primary">
                        {/* Show/Hide */}
                        {showState? 'Hide':'Show'}
                        {/* динамічний state якщо true-hide false-show */}
                    </button>
                    {showState ? <div className='card'>Hello</div>:null}
                </div>                
            </div>
            <div className="row">
                <div className="col-6 mx-auto">
                    <form action="">
                        <input
                        onChange={(e)=>changeUserData(e)} //обробка подій додаємо в середині стрілкової ф-ції буде чендж івент
                        placeholder='Type your data'
                        type="text" 
                        className='form-control' />
                    </form>
                    <p>
                        Form data: {userData}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Counter;