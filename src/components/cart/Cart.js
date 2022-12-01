import React, { Component } from 'react';
import CartColumns from './CartColumns'
import Title from '../Title';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals"

class Cart extends Component {
    render() {
        return (
            <section>
                
                <ProductConsumer>
                    {value=>{
                        const bool = value.cart.length;
                        if(bool === 0){
                            return ( <EmptyCart/>)
                        }else{
                            return (
                                <React.Fragment>
                                    <Title title="cart" name="your" ></Title>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotals value={value}/>
                                </React.Fragment> )
                        }
                    }}
                </ProductConsumer>
               
               
            </section>
        );
    }
}

export default Cart;