import { useState, createContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Layout } from './components/Layout';
import {Routes, Route} from "react-router-dom"
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { AddToCart } from './pages/AddToCart';
import cat1 from "./assets/cat1.png"
import { ScrollToTop } from './components/ScrollToTop';
import 'react-toastify/dist/ReactToastify.css';
import { NotFound } from './pages/NotFound';
import { CartPopup } from './components/CartPopup';

export const UserContext = createContext()
function App() {
  const [selected, setSelected] = useState(
    {
                name: "The african child set (Green)",
                old_price: 40000,
                new_price: 35000,
                quantity: 35,
                color: ['blue', 'red', 'black'],
                size:['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
                description: "What you get; A kaftan top.A matching pants",
                img: cat1,
                stars:3,
                cat: "Kaftans",
            },
  )
  const [cart, setCart] = useState(localStorage.getItem("FaawCart") ? JSON.parse(localStorage.getItem("FaawCart")) : []);
  const updateCart = (props) => {
    setCart([...cart, props])
  }
  const deleteItem = (props) => {
    setCart(cart.filter((item, index) => index !== props))
  }
  const updateSelected = (prop) => {
    setSelected(prop)
  }
  useEffect(() => {
    localStorage.setItem("FaawCart", JSON.stringify(cart))
  }, [cart])

  return (
    <div className="App">
      <UserContext.Provider value={{selected, updateSelected, cart, updateCart, deleteItem}}>
        <ToastContainer toastClassName="custom-toast"/>
        <ScrollToTop>
          <Layout>
            <Routes>
              <Route path='/' exact="true" element= {<Home/>}/>
              <Route path='/collections/:name' element= {<Collections/>}/>
              <Route path='/addToCart' element= {<AddToCart/>}/>
              <Route path='/cart' element={<CartPopup/>}/>
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Layout>
        </ScrollToTop>
      </UserContext.Provider>
    </div>
  );
}

export default App;
