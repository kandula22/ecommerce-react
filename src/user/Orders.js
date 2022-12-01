import React, { Component } from 'react';
import OrderItem from "./OrderItem";
import { ProductConsumer } from '../../context';
import UserColumns from "./UserColumns";

export default class Orders extends Component{

    render(){
    return (
        <React.Fragment>
        <UserColumns/>        
        <ProductConsumer>
            {value => {
                console.log("Order Items list", value.orderDetails)
                value.setOrders()
                return(
                <div>
            {value.orderDetails.map(item =>{
                return <OrderItem item={item} value={value}/>
            })}
           </div>
                )}}
        </ProductConsumer>
        </React.Fragment>
    )
}
}


