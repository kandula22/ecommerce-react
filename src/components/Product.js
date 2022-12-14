import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import { ProductConsumer } from '../context';

class Product extends Component {
    render() {
        const{id, name ,price} = this.props.product;
        
        return (
            <React.Fragment>

           <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div className="card">

                   <ProductConsumer>
                       {value => (
                   <div className="img-container p-5" 
                   onClick={()=>{
                            
                            value.handleDetail(id)
                                    value.getReviews(id)
                        }}>
                    <Link to="/details">
                          
                        <img src={`img/${id}.jpeg`} alt="product" className="card-img-top"></img>
                    </Link>
                    <Link to={value.status ? "/details" : "/login"}>
                    <button
                     className="cart-btn"
                     onClick={()=>{
                         
                        if(value.status){
                            value.handleDetail(id)
                            value.getReviews(id)
                        }else{
                            alert("Please Sign in to add items to cart");
                        }
                        
                       }
                    }
                     disabled={value.checkCart(id) ? true:false}
                     >
                         {value.checkCart(id) ?(
                             <p className="text-capitalize mb-0" disabled>
                                 
                                 in Cart
                             </p>
                         ):(
                            <i className="fas fa-cart-plus"/>
                         )}

                    </button>
                    </Link>
                   </div>
                   )}

                   </ProductConsumer>
                   <div className="card-footer d-flex justify-content-between">
                       <p className="align-self-center">
                           {name}
                       </p>
                       <h5 className="text-blue font-italic mb-0">
                       <span className="mr-1">$ </span>
                       {price}</h5>
                   </div>
               </div>
              

           </ProductWrapper>
           </React.Fragment>

        );
    }
}

export default Product;

const ProductWrapper = styled.div`

.card{
    border-color: transparent;
    transition: all 0.2s linear;
}

.card-footer{
    border-top: transparent;
    background: transparent;
    transition: all 0.2s linear;
}
&:hover{
    .card{
        border: 0.02rem solid rgba(0,0,0,0.2);
        box-shadow: 5px 5px 8px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}

.img-container{
    position: relative;
    overflow: hidden;
}

.card-img-top{
    transition: all 0.4s linear;
}

.img-container:hover .card-img-top{
    transform : scale(1.2);
}

.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    border-radius: 0.5rem 0 0 0 ;
    transform: translate(100%,100%);

}

.img-container:hover .cart-btn{
    transform: translate(0,0);
    transition: all 0.3s linear;

}

.cart-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
}

`