import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import {ButtonContainer} from "./Button";
import {ProductConsumer} from "../context";

class Navbar extends Component {
    render() {
        return (
            <ProductConsumer >{ value => {
                    const {status} = value
               return( 
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand"></img>
                </Link>
                <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                    </li></ul>
                    
                    <Link to={status ? "/userprofile" : "/login"}
                    className="nav-link "
                    >
                        {status ? value.userDetails.name:"login | signup"}
                    </Link>

                    <Link to={status ? "/cart" : "/login"} className="ml-auto">
                        <ButtonContainer
                        onClick={()=>{
                            if(!status){
                                alert("Please Sign in to add items to cart");
                            }
                        }}>
                            <i className="fas fa-cart-plus"/>
                            My cart
                        </ButtonContainer>
                    </Link>
                    
               </NavWrapper>)

               }}
           </ProductConsumer>
        );
    }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
      color: var(--mainWhite) !important;
      font-size: 1.3rem;
      text-transform: capitalize ;
  }
`

export default Navbar;