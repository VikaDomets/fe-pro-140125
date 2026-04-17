import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Header from "./components/Header"
import Footer from "./components/Footer"
import MyButton from './components/customButton/MyButton'
import Counter from './components/Counter'
import ProductList from './components/ProductList'
import UseEffectComponent from './components/UseEfect'
import UseRefComponent from './components/UseRefComponent'
import SliderComponent from './components/SliderComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import InfoPage from './pages/InfoPage'
function App() {
  // const [count, setCount] = useState(0)
  const imgAltText = 'logo example';
  const [showCounter, setShowCounter] = useState(false)
  return (
    <>
    <div className='container py-3'>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
          <Route path='/info' element={<InfoPage></InfoPage>}></Route>          
        </Routes>


        {/* <h1 className='text-center'>
          <img src={viteLogo} alt="logo" />

          Hello React 
          <img src={reactLogo} alt={imgAltText} />
        </h1>
        <SliderComponent></SliderComponent> */}
        {/* <Counter></Counter>
        <MyButton></MyButton> */}
        {/* <ProductList></ProductList> */}
        {/* <UseRefComponent></UseRefComponent>
        <button onClick={()=>setShowCounter(!showCounter)} className="btn btn-danger">
          Show hide useEfect
        </button>
        {showCounter && <UseEffectComponent></UseEffectComponent>} якщо true && то показуємо
        <hr />
        <button className='custom'>
          No module css
        </button> */}
        <Footer></Footer>        
      </Router>

    </div>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App