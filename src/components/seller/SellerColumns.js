import React, { Component } from 'react';

class SellerColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-9 mx-auto col-lg-2">
                <p className="text-uppercase">products</p>
                </div>
                <div className="col-9 mx-auto col-lg-2">
                <p className="text-uppercase">name of product</p>
                </div>
                <div className="col-9 mx-auto col-lg-2">
                <p className="text-uppercase">Order Total</p>
                </div>
                <div className="col-9 mx-auto col-lg-2">
                <p className="text-uppercase">Date Of purchase</p>
                </div>
                <div className="col-9 mx-auto col-lg-2">
                <p className="text-uppercase">Shipping Info</p>
                </div>
                <div className="col-9 mx-auto col-lg-2">
                <p className="text-uppercase">Status</p>
                </div>
            </div>
        </div>
        );
    }
}

export default SellerColumns;