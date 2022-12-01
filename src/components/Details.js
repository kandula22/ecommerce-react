import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";
import {ButtonContainer} from "./Button";
import ProductReviews from "./ProductReviews";

class Details extends Component {
    render() {
        return (
            <React.Fragment>
            <ProductConsumer>
                {(value)=>{
                    const {id,description,price,name} = value.detailProduct
                    console.log("value",value.detailProduct)
                        var inCart = value.checkCart(id)

                    return(
                    
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{name}</h1>
                                </div>


                            <div className="row" >
                                <div className="col-10 mx-auto col-md-6 my-3"/>
                                <img src={`img/${id}.jpeg`} className="img-fluid" alt="product"></img>
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>model : {name}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    made by:<span className="text-uppercase">{name}</span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                    price: <span>INR</span>{price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    product description
                                        </p>
                                <p className="text-muted lead">
                                    {description}
                                </p>

                                <div>
                                    <Link to="/">
                                        <ButtonContainer>
                                            Back to products
                                        </ButtonContainer>
                                    </Link>
                                    {/* <Link to={value.status ? "/details" : "/login"}>
                                    <ButtonContainer
                                        disabled={inCart ? true:false}
                                        onClick={()=>{
                                            if(value.status){
                                                value.addToCart(id)
                                                value.openModal(id)
                                            }else{
                                                alert("Please Sign in to add items to cart");
                                            }   
                                        }}
                                        >
                                            {inCart ? "in cart" : "add to cart"}
                                    </ButtonContainer>
                                    </Link> */}
                                </div>
                               
                            </div>
                            </div>

                            <div className="row ju">
                            <h4>Choose a seller</h4>
                            <div className="container">
                                                <div className="row">
                                                <div className="col-3">
                                                <h4 className="mt-3 mb-2">Seller</h4>

                                                </div>
                                                <div className="col-2">
                                                <h4 className="mt-3 mb-2 ml-3 mr-3">Price</h4>

                                                </div>
                                                <div className="col-2">
                                                <h4 className="mt-3 mb-2 ml-3 mr-3">Discount %</h4>
                                                </div>
                                                <div className="col-2">
                                                <h4 className="mt-3 mb-2 ml-3 mr-3">Effective Price</h4>
                                                </div>
                                                </div>
                                                </div>

                                    {value.sellers.map(seller=>{
                                        return (
                                            <div className="container">
                                                <div className="row">
                                                <div className="col-3">
                                                <h4 className="mt-3 mb-2">{seller.name}</h4>

                                                </div>
                                                <div className="col-2">
                                                <h4 className="mt-3 mb-2 ml-3 mr-3">INR {seller.price}</h4>

                                                </div>
                                                <div className="col-2">
                                                <h4 className="mt-3 mb-2 ml-3 mr-3"> {seller.discount} %</h4>

                                                </div>
                                                <div className="col-2">
                                                <h4 className="mt-3 mb-2 ml-3 mr-3">Rs {(100-seller.discount) * seller.price/100}</h4>
                                                </div>
                                                
                                            <div className="col-3">
                                            <Link to={value.status ? "/details" : "/login"}>
                                    <ButtonContainer
                                        disabled={inCart ? true:false}
                                        onClick={()=>{
                                            if(value.status){
                                                value.addToCart(id,seller,(100-seller.discount) * seller.price/100)
                                                value.openModal(id)
                                            }else{
                                                alert("Please Sign in to add items to cart");
                                            }   
                                        }}
                                        >
                                            {inCart ? "in cart" : "add to cart"}
                                    </ButtonContainer>
                                    </Link>
                                    </div>
                                                </div>

                                            </div>
                                    
                                        )
                                    })}
                        </div>
                    </div>
                    )
                }}
            </ProductConsumer>
             <ProductReviews></ProductReviews>
             </React.Fragment>
            
        );
    }
}

export default Details;