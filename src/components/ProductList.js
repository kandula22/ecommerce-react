import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import Product from "./Product";
import Catalogue from "./Catalogue";
import Title from "./Title";
import "./ProductList.css"

class ProductList extends Component {
   
    render() {
        return (
            <React.Fragment>
            <Title name="our" title="products"/>
            <div className="d-flex flex-row">
                <div className="catalogue py-5">
                    <Catalogue></Catalogue>
                </div>
                <div className="stateContainer py-5">
                <div className="productlist overflow-auto">
                     <div className="container d-flex flex-wrap">
                       
                       <div className="row"/>
                        <ProductConsumer>
                            {value=>{
                                let userDetails = value.userDetails
                                
                                return value.products.map(product =>{
                                    return <Product key={product.productId} product={product} userDetails={userDetails}></Product>
                                })
                            }}
                        </ProductConsumer>
                       </div>
                       </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;