import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Cart from './components/cart/Cart';
import Details from './components/Details';
import Modal from './components/Modal';
import Login from './components/Login';
import SellerLogin from './components/SellerLogin';
import SellerPortal from './components/SellerPortal';
import UserProfile from './components/user/UserProfile';
import Signup from './components/Signup';
import Orders from "./components/user/Orders";
import Reviews from "./components/user/Reviews";
import ModalTransaction from "./components/cart/ModalTransaction";


function App() {
 
  return (
    <React.Fragment>
           <Navbar/>
        <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/seller-login" component={SellerLogin}/>
        <Route exact path="/seller-portal" component={SellerPortal}/>
        <Route exact path="/userprofile" component={UserProfile}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/orders" component={Orders}/>
        <Route exact path="/myreviews" component={Reviews}/>
        <Route component={Default}/>
        </Switch>
        <Modal/>     
        <ModalTransaction/>  
    </React.Fragment>
  );
}

export default App;
