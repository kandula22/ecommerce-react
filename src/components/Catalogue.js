import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';


class Catalogue extends Component {
    render() {
        return (
            <ProductConsumer>{value=>{
                return(

            
            <div className="container mt-3">
                <div className="col d-flex flex-column">
                    
                    <Link to="/" >
                    <CatalogueItem className="text-capitalize mx-auto" onClick={()=>{value.changeProducts("men","clothes")}}>
                        Men
                    </CatalogueItem>
                    </Link>
                    <Link to="/">
                    <CatalogueItem className="text-capitalize mx-auto" onClick={()=>{value.changeProducts("women","clothes")}}>
                        Women
                    </CatalogueItem>
                    </Link>
                    <Link to="/">
                    <CatalogueItem className="text-capitalize mx-auto" onClick={()=>{value.changeProducts("kids","clothes")}}>
                        Kids
                    </CatalogueItem>
                    </Link>
                    <Link to="/">
                    <CatalogueItem className="text-capitalize mx-auto" onClick={()=>{value.changeProducts("pantry","pantry")}}>
                        Pantry
                    </CatalogueItem>
                    </Link>
                    <Link to="/">
                    <CatalogueItem className="text-capitalize mx-auto" onClick={()=>value.changeProducts("electronics","electronics")}>
                        Electronics
                    </CatalogueItem>
                    </Link>
                </div>
            </div>
                )
            }}
            </ProductConsumer>
           
        );
    }
}
const CatalogueItem = styled.div`
  border-radius : 0.2rem;
  background-color: #ffffff;
  transition: all 0.3s linear;

  &:hover{
    box-shadow: 1px 1px 5px 0px;
  }
  margin: 5px;
  width: 100%;
  padding-top: 5px;
  text-align:center;
`
export default Catalogue;