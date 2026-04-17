import React, {useState} from 'react';

function ProductList() {
    // const productsList = [
    //     {
    //         productionYear:2024,
    //         productMaker:'Apple',
    //         productModel:'Iphone Pro'
    //     }
    // ]
    const [productList, setProductList] = useState([]);
    const [productionYear, setProductionYear] = useState(new Date().getFullYear())
    const [productMaker, setProductMaker] = useState('')
    const [productModel, setProductModel] = useState('')

    function changeYear(e){
        setProductionYear(e.target.value)
    }
    function changeMaker(e){
       setProductMaker(e.target.value)
    }
    function changeModel(e){
        setProductModel(e.target.value)
    }
    // правила по відображенню елементів в реакт
    function addProduct(e){
        e.preventDefault()
        const newProduct = { // ключі
            productionYear:productionYear,
            productMaker:productMaker,
            productModel:productModel
        }
        // productList.push(newProduct) реакт опрацьовує дані і треба писати через сетер а не пуш
        setProductList(productList=>[...productList, newProduct]) //розширення елемента
        setProductMaker('') // повертаємо пустий стрінг
        setProductModel('')
        setProductionYear(new Date().getFullYear())
    }

    function removeItem(indexEl){ //ф-ція для видалення елементів
        setProductList(productList=>productList.filter((item, index)=>index != indexEl)) //якщо індекс не = індекс елементу то повертвємо це все в масив
    }

    return (
        <div className='row my-3'>
            <div className="col-4 mx-auto">
                <div className="mb-3">
                    <form action="">
                        <div className="mb-3">
                            <input
                            onChange={changeYear}
                            value={productionYear}
                            placeholder='Product year' 
                            type="text" 
                            className="w-100 form-control" />                                
                        </div>
                        <div className="mb-3">
                            <input
                            onChange={changeMaker}
                            value={productMaker}
                            placeholder='Product maker' 
                            type="text" 
                            className="w-100 form-control" />                                
                        </div>
                        <div className="mb-3">
                            <input
                            onChange={changeModel}
                            value={productModel}
                            placeholder='Product model' 
                            type="text" 
                            className="w-100 form-control" />                                
                        </div>
                        {/* для виклику кнопку пишемо */}
                        <button 
                        onClick={(e)=>addProduct(e)} 
                        className="btn btn-primary w-100">
                            Add product
                        </button>
                    </form>
                    
                </div>
                <div className="row">
                    <div className="col-12 mx-auto">
                    <ul class="list-group">
                        {/* <li class="list-group-item">An item</li> замість лі елементів генерувати їх*/}
                        {/* повертаємо нову колекці\маисв через map */}
                        {productList.map((item, index)=>{ //index масиву навчал варіант, треба додавати id з апі. key по ньому ми будемо видаляти тому він потрібен
                            return <li className='list-group-item d-flex justify-content-between' key={index}>
                                <div>
                                    Is {item.productModel} {item.productMaker} made: {item.productionYear}
                                </div>
                                <div>
                                    <button onClick={()=>removeItem(index)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        })}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;