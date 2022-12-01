import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import Title from "../Title";
import {ButtonContainer} from  '../Button';
import {Link} from 'react-router-dom';


class UserProfile extends Component {
    render() {
        return (
            <React.Fragment>
                <Title title="user profile"></Title>
                {/* <ProductConsumer>
                    {value=>{
                        value.setOrders()
                    }}
                </ProductConsumer> */}
                <ProductConsumer>
                    {value=>{
                        
                        return(
                <div className="container py-5">
                            <div className="col">
                                <div className="col-10 mx-auto text-center text-slanted text-blue ">
                                    <h1>{value.userDetails.name}</h1>
                                </div>
                                <h4 className="col-10 mx-auto text-center text-title text-uppercase text-muted mt-3 mb-2">
                                {value.userDetails.email}
                                </h4>
                                <h4 className="col-10 mx-auto text-center text-title text-uppercase text-muted mt-3 mb-2">
                                {value.userDetails.phone}
                                </h4>
                                <h4 className="col-10 mx-auto text-center">
                                    <strong>Address </strong>
                                    <strong>
                                    <p>{value.userDetails.houseNumber + value.userDetails.street } </p>
                                    
                                    <p>{value.userDetails.city + value.userDetails.zipcode }</p>
                                    </strong>
                                </h4>

                                 <Link to="/orders">
                                    <ButtonContainer>                                  
                                  Previous Orders
                                   </ButtonContainer>
                                 </Link>
                                 <Link to="/myreviews" >
                                      <ButtonContainer>
                                     Reviews
                                    </ButtonContainer>
                                 </Link>
                        </div>

                </div>

                 )
                    }}
                
                </ProductConsumer>
            </React.Fragment>
        );
    }
}

export default UserProfile;