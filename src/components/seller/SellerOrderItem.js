import React from 'react';
import {Link} from 'react-router-dom';


export default function OrderItems({item,value}){

    const {id,product_id,order_price,created_time,shipping_info, status} = item
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
               src={`img/${product_id}.jpeg`}
               style={{width: "5rem",height:"5rem"}}
               alt="product"
               className="img-fluid"
               />
               </Link>
           </div>
           <div className="col-10 mx-auto col-lg-1">
               {value.getOrderItem(id).product_name}
           </div>
           <div className="col-10 mx-auto col-lg-1">
               {order_price}
           </div>
           <div className="col-10 mx-auto col-lg-1">
               {created_time}
            </div>
            <div className="col-10 mx-auto col-lg-2">
               {shipping_info}
            </div>
            {/* <div className="col-10 mx-auto col-lg-1">
               {status}
            </div> */}
            <div className="col-10 mx-auto col-lg-1">
                <select 
                    onChange={value.updateOrderStatus}
                >
                <option selected={status == "Preparing Dispatch"} value={id+"-"+"Preparing Dispatch"}>Preparing Dispatch</option>
                <option selected={status == "In Transit"} value={id+"-"+"In Transit"}>In Transit</option>
                <option selected={status == "Delivered"} value={id+"-"+"Delivered"}>Delivered</option>
                </select>
            </div>

       </div>
           {/* <Reviews item={item} value={value}/> */}
       </React.Fragment>
    )

}

