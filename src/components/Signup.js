import React from 'react'
import "./Signup.css";
import { ProductConsumer } from '../context';


const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false )
    );
    return valid;
  }

export default class Signup extends React.Component{

    constructor(){
        super()
        this.state = {
            name : '',
            email :'',
            phone : '',
            houseNumber : '',
            street: '',
            city: '',
            zipcode: '',
            password:'',
            password2:'',
            errors : {
              name : ' ',
              email :' ',
              phone : ' ',
              houseNumber : ' ',
              street: ' ',
              city: ' ',
              zipcode: ' ',
              password:' ',
              password2:' ',
            }
        }
    }

    handleChange=(e)=>{
        const {name,value} = e.target
        let errors = this.state.errors
        switch (name) {
            case 'name': 
              errors.name = 
                value.length < 5
                  ? 'Full Name must be atleast 5 characters long!'
                  : '';
              break;
            case 'email': 
              errors.email = 
              value.length < 5
                  ? 'Email is not valid!'
                  : '';
              break;
            case 'phone': 
              errors.phone = 
                value.length !== 10
                  ? 'Phone must be 10 characters long!'
                  : '';
                  
              break;

              case 'houseNumber': 
              errors.houseNumber = 
                (value.length < 3 || value.length > 5)
                  ? 'Housenumber must be of 3-5 characters'
                  : '';
              break;

              case 'city': 
              errors.city = 
                value.length < 5
                  ? 'Enter valid city name.'
                  : '';
              break;

              case 'street': 
              errors.street = 
                value.length < 5 
                  ? 'invalid street'
                  : '';
              break;

              case 'zipcode': 
              errors.zipcode = 
                value.length !== 6 
                  ? 'invalid street'
                  : '';
              break;

              case 'password':
                errors.password = 
                value.length < 5
                ? 'Password too short'
                :'';
                break ;

                case 'password2':
                    errors.password2 = 
                    value !== this.state.password
                    ? 'Passwords not matching'
                    :'';
                    break ;  

              default:
                     break;
          }

          this.setState({errors, [name]:value})
    }

    handlesubmit=(e)=>{
        if(!validateForm(this.state.errors)){
            e.preventDefault()
            alert("invalidformdetails")
        }
    }

    render(){
        return(
          <ProductConsumer>{value=>{
            return(

            <div className="wrapper">
                <div className="form-wrapper">
                    
                    <form name="customerInfoForm" id="customerInfoForm" onSubmit={this.handlesubmit}>
                    <div className="intro">
                        Please fill in your details
                    </div>

                    <div class="customerInfo">
                            <div class="name">
                                <label>Name</label>
                                <input
                                onChange = {this.handleChange}
                                name="name"
                                type="text"
                                placeholder="Name"
                                ></input>
                             <div class="errors">{this.state.errors.name} </div>
                            </div>
                            <div class="email">
                                <label>Email</label>
                                <input
                                onChange = {this.handleChange}
                                name="email"
                                type="text"
                                placeholder="E-mail"
                                ></input>
                                <div class="errors">{this.state.errors.email} </div>
                            </div>
                            <div class="phone">
                                <label>Phone</label>
                                <input
                                onChange = {this.handleChange}
                                name="phone"
                                type="number"
                                placeholder="Phone"
                                ></input>
                                <div class="errors">{this.state.errors.phone} </div>
                            </div>
                            
                        </div>

                        <label>Address</label>

                        <div class="addressInfo">

                            <div class="houseNumber">
                                <label>House Number</label>
                                <input
                                onChange = {this.handleChange}
                                name="houseNumber"
                                type="text"
                                placeholder="House Number"
                                ></input>
                                <div class="errors">{this.state.errors.houseNumber} </div>
                            </div>

                            <div class="street">
                                <label>Street</label>
                                <input
                                onChange = {this.handleChange}
                                name="street"
                                type="text"
                                placeholder="Street"
                                ></input>
                                <div class="errors">{this.state.errors.street} </div>
                            </div>
                            <div class="city">
                                <label>City</label>
                                <input
                                onChange = {this.handleChange}
                                name="city"
                                type="text"
                                placeholder="City"
                                ></input>
                                <div class="errors">{this.state.errors.city} </div>
                            </div>
                            <div class="zipcode">
                                <label>Zipcode</label>
                                <input
                                onChange = {this.handleChange}
                                name="zipcode"
                                type="number"
                                placeholder="Zipcode"
                                ></input>
                                <div class="errors">{this.state.errors.zipcode} </div>
                            </div>

                            <div class="password">
                                <label>Password</label>
                                <input
                                onChange = {this.handleChange}
                                name="password"
                                type="password"
                                placeholder="Password"
                                ></input>
                                <div class="errors">{this.state.errors.password} </div>
                            </div>
                            <div class="password2">
                                <label>Re-Enter Password</label>
                                <input
                                onChange = {this.handleChange}
                                name="password2"
                                type="password"
                                placeholder="Re-Enter Password"
                                ></input>
                                <div class="errors">{this.state.errors.password2} </div>
                            </div>

                        </div>
  
                        <div class="submission">
                            <input type="submit" 
                            onClick={(e)=>{
                              // event.preventDefault()
                              // const data = new URLSearchParams();
                              let data = {}
                      for (const pair of new FormData(document.getElementById("customerInfoForm"))) {
                          // data.append(pair[0], pair[1]);
                          data[pair[0]] = pair[1]
                      }
                      console.log("User data", data)
                      e.preventDefault();
                              fetch('http://localhost:8000/addCustomer',{
                                  method:'post',
                                  headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                  },
                                  body: JSON.stringify(data)
                              })
                              .then((res) => {
                                       return res.json()
                              })
                              .then((json) => {
                                               var userDetails = json
                                               if(json.errno === 1062){
                                                 alert("User already registered please login")
                                                 this.props.history.push("/login");

                                               }else{
                                                 alert("Registeration successfull")
                                                 value.setUser(userDetails) 
                                                 value.changeStatus(true)
                                                 try {
                                                    
                                                  this.props.history.push("/");
                                                } catch (e) {
                                                  alert(e.message);
                                                }

                                               }
                                  })  
                                  
                          }} ></input>
                        </div>
                        
                    </form>
                </div>

            </div>
            )}}

            </ProductConsumer>
        );
    }
}
