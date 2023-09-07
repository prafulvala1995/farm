import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Loginform from './component/Loginform';
import Addproduct from './component/Addproduct';
import ViewProduct from './component/Viewproduct';
import Singleproduct from './component/Singleproduct';
import AddtoCart from './component/AddtoCart';
import Wishlist from './component/Wishlist';
import Checkout from './component/Checkout';
import Order from './component/Order';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Loginform/>}></Route>
        <Route path='/login' element={ <Loginform/>}></Route>
        <Route path='/home' element={ <Home/>}></Route>
        <Route path='/addproduct' element={ <Addproduct/>}></Route>
        <Route path='/viewproduct' element={ <ViewProduct/>}></Route>
        <Route path='/single/:id' element={ <Singleproduct/>}></Route>
        <Route path='/cart' element={ <AddtoCart/>}></Route>
        <Route path='/wishlist' element={ <Wishlist/>}></Route>
        {/* <Route path='/checkout' element={ <Checkout/>}></Route> */}
        <Route path='/order' element={ <Order/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
