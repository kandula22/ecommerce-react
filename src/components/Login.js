import React from 'react'
import "./Login.css";
import {ProductConsumer} from "../context"

export default class Login extends React.Component{

    constructor(){
        super()
        this.state = {
            username : '',
            password :' ',
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handlesubmit=(e)=>{

         e.preventDefault()
    }

    render(){

        return(
            <ProductConsumer>
                {value=>{
                    return(

            <div className="wrapper">
                <div className="form-wrapper">
                    
                    <form name="customerForm" id="customerForm" onSubmit={this.handlesubmit} >
                    <div className="intro text-center">
                        Sign In 
                    </div>

                    <div className="customerInfo">
                            <div className="username">
                                <label>Username</label>
                                <input
                                name="username"
                                id="username"
                                type="text"
                                placeholder="Username"
                                onChange={this.handleChange}
                                ></input>
                            </div>
                            <div className="password">
                                <label>Password</label>
                                <input
                                name="password"
                                id="password"
                                onChange={this.handleChange}
                                type="password"
                                placeholder="Password"
                                ></input>
                            </div>
                        </div>


                       
                        <div className="submission">
                            <input type="submit"
                            onClick={()=>{
                          const data = new URLSearchParams();
                        for (const pair of new FormData(document.getElementById("customerForm"))) {
                            data.append(pair[0], pair[1]);
                        }
                        
                                fetch(`http://localhost:8000/customer/${this.state.username}`,{
                                    method:'get'
                                    // ,
                                    // body:data
                                })
                                .then((res) => {
                                         return res.json()
                                })
                                .then((json) => {
                                        console.log("json is...",json)
                                            if(json.length == 0){
                                                alert("Username not found, please Signup")
                                            } else {
                                                json = json[0]
                                                var userDetails = json
                                                var receivedPassword = json.password;
                                                if(receivedPassword === null){
                                                    alert("Username not found, please Signup")
                                                }
                                                else if(receivedPassword.toString() !== this.state.password){
                                                    alert('Invalid password')
                                                    value.changeStatus(false)
                                                }else{
                                                    value.setUser(userDetails) 
                                                    value.changeStatus(true)
                                                        
                                                    try {
                                                        
                                                        this.props.history.push("/");
                                                      } catch (e) {
                                                        alert(e.message);
                                                      }
    
                                                    value.setOrders();  
                                                }
                                            }
                                    })  
                                    
                            }} ></input>
                        </div>

                        <div className="text-center">
                            <span onClick={()=>{
                                 this.props.history.push("/signup");
                            }}
                            
                            style={{cursor:'pointer'}}>New Customer? Sign Up</span>
                        </div>

                        <div className="text-center">
                            <span onClick={()=>{
                                 this.props.history.push("/seller-login");
                            }}
                            
                            style={{cursor:'pointer'}}>Sign in as Seller?</span>
                        </div>
                        
                    </form>
                </div>

            </div> )}}
            </ProductConsumer>
        );
    }
}
