import React, { Component } from 'react';

class UserColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">name of product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Order Total</p>
                </div>
                {/* <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Seller</p>
                </div> */}
                <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">Date Of purchase</p>
                </div>
                {/* <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">payment method</p>
                </div> */}
            </div>
        </div>
        );
    }
}

export default UserColumns;