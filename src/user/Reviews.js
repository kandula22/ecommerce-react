import React from 'react';
import Title from "../Title";
import { ProductConsumer } from '../../context';
import {Link} from 'react-router-dom';


export default function Reviews({item,value}) {

    return (
        <React.Fragment>

        <Title title="Please leave a review"/>
        <ProductConsumer>{value=>{
            return(

       
        <div>
            <form id="reviewForm">
            <input type="text" name = "review" defaultValue="good product"/>
            <Link to="/">
            <input type= "submit" onClick={()=>{

            const data = new URLSearchParams();
                        for (const pair of new FormData(document.getElementById("reviewForm"))) {
                            data.append(pair[0], pair[1]);
                        }
                        data.append("orderId",value.reviewProduct.orderId)

            fetch('http://localhost:8000/crud/review',{
                  method: "POST",
                  body: data  
                 })

                 alert("Thanks for your review!")
                }}/>
            </Link>
            </form>
        </div>
        
             )
        }}
        </ProductConsumer>
        </React.Fragment>

    );
}
