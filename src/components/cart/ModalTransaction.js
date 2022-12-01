import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../context';
import {ButtonContainer} from  '../Button';
import styled from "styled-components"

class ModalTransaction extends Component {
    state={
        payment:'cash'
    }
    
    handlePayment=(e)=>{
        this.setState({
            payment:e.target.value
        },()=>{console.log(this.state.payment)})
    }
    render() {
        
        return (
            <ProductConsumer>
                {value =>{
                    const {modal2Open,closeModal2,closeModalTransaction} = value;
                    
                    if(!modal2Open){
                        return null
                    }else{
                        return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                            
                                    <div  
                                    id="modal"
                                    className="col-8 mx-auto col-md-6 col-lg-4
                                    text-center text-capitalize p-5">

                                    <h5>Pay using</h5>
                                    <select id = "dropdown" onChange={(e)=>{this.handlePayment(e)}}>
                                    <option value="cash">Cash</option>
                                    <option value="card">Card</option>
                                     </select>

                                    <h5 className="text-muted">Amount : Rs{value.cartSubtotal}</h5>
                                    <Link to="/"
                                    >
                                        <ButtonContainer
                                        onClick={()=>{closeModalTransaction()}}>
                                            Cancel
                                        </ButtonContainer>
                                    </Link>
                                    <Link to="/"
                                    >
                                        <ButtonContainer
                                        onClick={()=>{closeModal2(this.state.payment)}}>
                                            Pay
                                        </ButtonContainer>
                                    </Link>


                                    </div>

                                </div>
                            </div>
                        </ModalContainer>
                        )
                        
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background : rgba(0,0,0,0.3);
display: flex;
align-items:center;
justify-content: center;
#modal{
    background: var(--mainWhite);
}

`
export default ModalTransaction;