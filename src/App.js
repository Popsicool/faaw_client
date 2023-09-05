import { useState, createContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Layout } from './components/Layout';
import {Routes, Route} from "react-router-dom"
import { Home } from './pages/Home';
import { CollectionPage} from './pages/CollectionPage';
import { AddToCart } from './pages/AddToCart';
// import cat1 from "./assets/cat1.png"
import { ScrollToTop } from './components/ScrollToTop';
import 'react-toastify/dist/ReactToastify.css';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';
import { Checkselected } from './components/CheckSelected';
import coldata from "./data/CollData"
import styldata from './data/styleData';
import { Loading } from './components/Loading';
import { CategoryPage } from './pages/CategoryPage';
// import { toast } from 'react-toastify';

export const UserContext = createContext()
function App() {
  const [selected, setSelected] = useState(null)
  // const [selected, setSelected] = useState(
  //   {
  //               name: "The african child set (Green)",
  //               old_price: 40000,
  //               new_price: 35000,
  //               quantity: 35,
  //               color: ['blue', 'red', 'black'],
  //               size:['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  //               description: "What you get; A kaftan top.A matching pants",
  //               img: [cat1],
  //               stars:3,
  //               cat: "Kaftans",
  //           },
  // )
  const [cdata, setCdata] = useState(null)
  const [cldata, setCldata] = useState(null)
  const [loading, setisloading] = useState(true)
  const [cart, setCart] = useState(localStorage.getItem("FaawCart") ? JSON.parse(localStorage.getItem("FaawCart")) : []);
  const updateCart = (props) => {
    setCart([...cart, props])
  }
  const deleteItem = (props) => {
    setCart(cart.filter((item, index) => index !== props))
  }
  let price = 0;
    cart.forEach(element => {
        price += element.new_price * element.quantity_choice
    });
  const updateSelected = (prop) => {

    setSelected(prop)
  }
  useEffect(() => {
    localStorage.setItem("FaawCart", JSON.stringify(cart))
  }, [cart])
  useEffect(() => {
    setCdata(coldata);
    setCldata(styldata)
    setisloading(false)
  }, [])
  // useEffect(() => {
  //   const url = "http://localhost:8000";
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       setCdata(data);
  //       setisloading(false)
  //     })
  //     .catch(error => {
  //       console.error("Error fetching categories:", error);
  //       toast.error("Something went wrong, Please try again latter", {
  //       position:"bottom-right"})
  //       setisloading(false)
  //     });
  //   const url2 = "http://localhost:8000/collections"
  //   fetch(url2)
  //     .then(res => res.json())
  //     .then(data => {
  //       setCldata(data);
  //       setisloading(false)
  //     })
  //     .catch(error => {
  //       console.error("Error fetching categories:", error);
  //       setisloading(false)
  //     });
  // }, [])

  return (
    <div className="App">
      <UserContext.Provider value={{selected, updateSelected, cart, updateCart, deleteItem, cdata, setCart, cldata, loading, setisloading, price}}>
        <ToastContainer toastClassName="custom-toast"/>
        <ScrollToTop>
          <Layout>
            {!loading ?
            <Routes>
              <Route path='/' exact="true" element= {<Home/>}/>
              <Route path='/shop/:name' element= {<CategoryPage/>}/>
              <Route path='/collections/:name' element= {<CollectionPage/>} />
              <Route path='/addToCart' element= {<Checkselected><AddToCart/></Checkselected>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path="*" element={<NotFound/>} />
            </Routes>
            :
            <Loading/>
            }
          </Layout>
        </ScrollToTop>
      </UserContext.Provider>
    </div>
  );
}

export default App;
