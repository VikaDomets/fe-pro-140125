import React, { useState, useEffect } from 'react';

// useEffect це хук що спрацьовує коли відбув ререндер компоненту або відб mount(монтування) компонент, коли відмальовується на сторінці, момент відмальовування
// 3 варіанти відображень

const UseEffectComponent = () => {
    const [count, setCount] = useState(0);
    // const [state2, setState2] = useState(null);
    // const [state3, setState3] = useState(null);

    // useEffect(() => {
    //     // 1 Effect після кожного рендеру
    //     console.log('Effect for state1')
    //     document.title = `Count ${count}`
       
    // })

    // useEffect(() => {
    //     // 2 Effect виконується після mount. вказання порожнього масиву
    //     document.title = `Count ${count}`
    //     return ()=>{
    //         console.log('Компонент приховано або видалено з відобраеження'); кожного разу коли елемент видалений або прихований, буде зявлятись що елемент успішно видалено чи приховано
    //     }


    // }, []);

    useEffect(() => {
        // 3 Effect Виконується також при зміні значень в масиві що отримує. зміна стану на сторінці. корзина клієнта з товарами
        document.title = `Count ${count}`
    }, [count]);
    function addCount(){
        setCount(count=>count+1)
    }

    return (
        <div>
            Hello
            {/* <p>{state1}</p>
            <p>{state2}</p>
            <p>{state3}</p> */}
            <button onClick={addCount} className='btn btn-primary'>
                +1
            </button>
        </div>
    );
};

export default UseEffectComponent;