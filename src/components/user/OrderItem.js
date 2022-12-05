import React from 'react';
import {Link} from 'react-router-dom';


export default function OrderItems({item,value}){

    const {name,productId,order_price,created_time,payment, status} = item
    console.log("Item OrderItem", item);

    return( 
        <React.Fragment>
       <div className="row my-1 text-capitalize text-center">
           <div className="col-10 mx-auto col-lg-2"
           onClick ={()=>{value.handleReview(item)
                console.log(item)    
        }
           
           }>
               <Link to="/myreviews">
               <img 
               src={`img/${productId}.jpeg`}
               style={{width: "5rem",height:"5rem"}}
               alt="product"
               className="img-fluid"
               />
               </Link>
           </div>
           <div className="col-10 mx-auto col-lg-2">
               {value.getItem(productId).name}
           </div>
           <div className="col-10 mx-auto col-lg-2">
               {order_price}
           </div>
           {/* <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
               {name}
           </div> */}
           <div className="col-10 mx-auto col-lg-2">
               {created_time}
            </div>
           <div className="col-2 mx-auto col-lg-2">
                {status}
           </div>

       </div>
           {/* <Reviews item={item} value={value}/> */}
       </React.Fragment>
    )

}

