import React, { Component } from 'react';
import {ProductConsumer} from "../context"
import Title from "./Title"


class ProductReviews extends Component {
    render() {
        return (
            <div>
            <ProductConsumer>
                {value=>{
                    if(value.reviews.length !== 0){
                        
                    return value.reviews.map(review=>{
                        return (
                            

                            <div className="container">
                                <div className="row">
                                    <div className="col-3">
                                    <h6 className="mt-3 mb-2 ml-3">{review.name}</h6>
                                    </div>
                                    <div className="col-9">
                                    <p className="text-muted lead">
                                    {review.review}
                                </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }else{
                    return(
                        <Title title="No user reviews"></Title>
                    )
                }
                }}
            </ProductConsumer></div>
        );
    }
}

export default ProductReviews;