import React, { Component } from 'react';
import SellerOrderItem from "./seller/SellerOrderItem";
import { ProductConsumer } from '../context';
import SellerColumns from "./seller/SellerColumns";

export default class SellerPortal extends Component{

    render(){
    return (
        <React.Fragment>
        <SellerColumns/>        
        <ProductConsumer>
            {value => {
                console.log("SellerOrder Items list", value.sellerOrderDetails)
                // value.setSellerOrders()
                return(
                <div>
            {value.sellerOrderDetails.map(item =>{
                return <SellerOrderItem item={item} value={value}/>
            })}
           </div>
                )}}
        </ProductConsumer>
        </React.Fragment>
    )
}
}