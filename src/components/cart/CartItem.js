import React from 'react';

export default function CartItem({item,value}){

    const {id,name,price,order_price,quantity} =item
    const {increment,decrement,removeItem} = value

    
    console.log("cartitem line 8", item)
    console.log("cartitem line 8", value)
    return(
       <div className="row my-1 text-capitalize text-center">
           <div className="col-10 mx-auto col-lg-2">
               <img 
               src={`img/${id}.jpeg`}
               style={{width: "5rem",height:"5rem"}}
               alt="product"
               className="img-fluid"
               />
           </div>
           <div className="col-10 mx-auto col-lg-2">
               <span className="d-lg-none">product : </span>
        {name}
           </div>
           <div className="col-10 mx-auto col-lg-2">
               <span className="d-lg-none">price : </span>
               {price}
           </div>
           <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
               <div className="d-flex justify-content-center">
                   <div>
                       <span className="btn btn-black mx-1"
                       onClick={()=>{decrement(id)}}>-</span>
                       <span className="btn btn-black mx-1">{quantity}</span>
                       <span className="btn btn-black mx-1"
                       onClick={()=>{increment(id)}}>+</span>

                   </div>
               </div>
           </div>
           <div className="col-10 mx-auto col-lg-2">
               <div className="cart-icon" onClick={()=>{removeItem(id)}}>
                   <i className="fas fa-trash"/>
               </div>
               </div>

           <div className="col-2 mx-auto col-lg-2">
               <strong> item total : ${order_price}</strong>

           </div>

       </div>
    )

}

