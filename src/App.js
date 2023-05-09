import ProductList from './ProductList';
import ProductBill from './ProductBill';
import ProductDetail from './ProductDetail';
import {Route,Routes,BrowserRouter, Link} from 'react-router-dom'
import { CartContext } from './CartContext';
import { useState } from 'react';
import MainMenu from './MainMenu';
import "bootstrap/dist/css/bootstrap.min.css";
import StaffForm from './StaffForm';

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>

      <CartContext.Provider value={{cartItems, setCartItems}}>

      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link active">首頁</Link>
              </li>
              <li className="nav-item">
                <Link to='/product_list' className="nav-link active">買野食</Link>
              </li>
              <li className="nav-item">
                <Link to='/product_bill' className="nav-link active">購物車</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        

        <Routes>
          <Route path='/' element={<MainMenu/>}></Route>
          <Route path='/product_list' element={<ProductList/>}></Route>
          <Route path='/product_detail' element={<ProductDetail/>}>
            <Route path=':id' element={<ProductDetail/>}></Route>
          </Route>
          <Route path='/product_bill' element={<ProductBill/>}></Route>
          <Route path='/staffForm' element={<StaffForm/>}></Route>
          <Route path='*' element={<p>The page not found</p>}></Route>
        </Routes>

      </CartContext.Provider>

    </BrowserRouter>
  );
}

export default App;
