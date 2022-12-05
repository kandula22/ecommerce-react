import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state={
        products: [],
        electronics:[],
        pantry:[],
        men:[],
        women:[],
        kids:[],
        productType:'',
        sellers:[],
        detailProduct: {},
        reviewProduct:{},
        reviews:[],
        cart:[],
        orderDetails:[],
        modalOpen: false,
        modalProduct:{},
        modal2Open: false,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal:0,
        userDetails: {},
        status: false,
        sellerDetails: {},
        sellerOrderDetails: []
    }

    componentDidMount(){
        this.storeProducts();
        this.setState(()=>{
            return {productType:"electronics"}
        })
    }

    setUser=(user)=>{
        this.setState(()=>{
            return {userDetails : user}
        })
    }

    setSeller=(seller)=>{
        this.setState(()=>{
            return {sellerDetails : seller}
        })
    }
    
    getItem = (id) => {
        var product;
        console.log("id in getItem", id)
        if(product == null){
         product = this.state.electronics.find( item => item.id === id);
        }
        if(product == null){
         product = this.state.pantry.find( item => item.id === id);
        }
        if(product == null){
            product = this.state.men.find( item => item.id === id);
        }
        if(product == null){
            product = this.state.women.find( item => item.id === id);
        }
        if(product == null){
            product = this.state.kids.find( item => item.id === id);
        }
        return product;
    }

    getOrderItem = (id) => {
        var order;
        console.log("id in getOrderItem", id)
        if(order == null){
         order = this.state.sellerOrderDetails.find( item => item.id === id);
        }
        return order;
    }

    getItemCart = (id) => {
        const product = this.state.cart.find( item => item.id === id);
        return product;
    }

    checkCart = (id) =>{
        const product = this.state.cart.find( item => item.id === id);
        if(product!=null){
            return true;
        }
        else{
            return false;
        }
    }

    handleDetail=(id)=>{
        const product = this.getItem(id)
        this.setState(()=>{
            return {detailProduct : product}
        })
        this.getSellers(id)
        // this.setState(()=>{
        //     return { sellers:product["sellers"]}
        // })
    }

    handleReview=(product)=>{
        this.setState(()=>{
            return {reviewProduct: product}
        })
    }

    getReviews=(id)=>{
        this.setState(()=>{
            return {reviews:[]}
        })
        var form_data = new FormData();
            
        form_data.append("id", id);
        form_data.append("productType",this.state.productType)

        const data = new URLSearchParams();
        for (const pair of form_data) {
            data.append(pair[0], pair[1]);
        }
        

        // fetch('http://localhost:8000/products/getReviews',{
        //                           method:'post',
        //                           body: data
        //                       })
        //      .then((res) => {
        //          return res.json()
        //         })
        //       .then((json) => {                    
        //             this.setState(()=>{
        //                 return { reviews:json}
        //              })
        //          })  
    }

    getSellers=(id)=>{
        this.setState(()=>{
            return {sellers:[]}
        })
        var form_data = new FormData();
            
        form_data.append("id", id);

        const data = new URLSearchParams();
        for (const pair of form_data) {
            data.append(pair[0], pair[1]);
        }
        

        fetch(`http://localhost:8000/products/getSellers/${id}`,{
                                  method:'get'
                              })
             .then((res) => {
                 return res.json()
                })
              .then((json) => {    
                console.log("Sellers", json)                
                    this.setState(()=>{
                        return { sellers:json}
                     })
                 }) 
    }

    increment = (id)=>{
        const tempProducts = [...this.state.cart]
        const i = tempProducts.indexOf(this.getItemCart(id))
        const product = tempProducts[i]
        console.log("Cart pid", id)

        console.log("Cart ", tempProducts)
        product.quantity++
        product.order_price = product.price*product.quantity
        this.setState(()=>{
            return {cart : tempProducts}
        },()=>{this.addTotals()})
    }

    decrement = (id)=>{
        const tempProducts = [...this.state.cart]
        const i = tempProducts.indexOf(this.getItemCart(id))
        const product = tempProducts[i]
        if(product.quantity > 1){
            product.quantity--
            product.order_price = product.price*product.quantity
        }
        this.setState(()=>{
            return {cart : tempProducts}
        },()=>{this.addTotals()})
    }

    removeItem = (id)=>{

        let tempCart =[...this.state.cart] ;
        tempCart = tempCart.filter(item => item.id !== id)
        this.setState(()=>{
            return {cart: [...tempCart]}
        },()=>{this.addTotals()})

    }

    clearCart = ()=>{
            this.setState(()=>{
                return {cart:[]}
            })
    }

    addTotals= ()=>{
        let subTotal = 0
        this.state.cart.map(item =>(subTotal += item.order_price))
        const tempTax = subTotal * 0.1
        const tax= parseFloat(tempTax.toFixed(2))
        const order_price = subTotal + tax
        this.setState(()=>{
            return {
                cartSubtotal:subTotal,
                cartTax: tax,
                cartTotal:order_price
            }
        })
    }

    openModal =(id) =>{
        const product =this.getItem(id)
        this.setState(()=>{
                return {modalProduct:product,modalOpen:true}
        })
    }

    closeModal=()=>{
        this.setState(()=>{
            return {modalOpen:false}
    })
    }

    openModal2 =(id) =>{
        // product =this.getItem(id)
        this.setState(()=>{
                return {modal2Open:true}
        })
    }

    closeModal2=(payment)=>{
        this.setState(()=>{
            return {modal2Open:false}
    })
    this.checkout(payment)
    }
    closeModalTransaction=()=>{
        this.setState(()=>{
            return {modal2Open:false}
    })
    }

    changeStatus=(bool)=>{
        this.setState(()=>{
            return {status: bool}
        })
    }

    addToCart=(id,seller,effPrice)=>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.quantity = 1;
        product.sellerId=seller.id;
        //product.price=seller.
        product.price = effPrice
        product.order_price = effPrice*product.quantity

        // console.log("addToCart", id, seller, effPrice)

        this.setState(()=>{
            return {cart:[...this.state.cart , product]}
        },()=>{this.addTotals()})
    }

    changeProducts=(productType,category)=>{

        this.setState(()=>{
            switch(productType){
                case "electronics":
                 return {products:[...this.state.electronics],productType:category}
                case "pantry":
                return {products:[...this.state.pantry],productType:category}
                case "women":
                return {products:[...this.state.women],productType:category}
                case "men":
                return {products:[...this.state.men],productType:category}
                case "kids":
                return {products:[...this.state.kids],productType:category}
                default : 
                
            }
        }
        )
    }

    storeProducts=()=>{

      fetch('http://localhost:8000/products/electronics',{
                                  method:'get'  
                              })
             .then((res) => {
                var json_d = res.json()
                console.log(json_d)
                 return json_d
                })
              .then((json) => {                    
                    this.setState(()=>{
                        return { products:json,
                                 electronics:json}
                     },()=>{console.log("Products in state" + this.state.products)})
                 }) 

             fetch('http://localhost:8000/products/pantry',{
                                  method:'get'  
                              })
             .then((res) => {
                 return res.json()
                })
              .then((json) => {                    
                    this.setState(()=>{
                        return { pantry:json}
                     },()=>{console.log("Products in state" + this.state.products)})
                 }) 

            fetch('http://localhost:8000/products/men',{
                                  method:'get'  
                              })
             .then((res) => {
                 return res.json()
                })
              .then((json) => {                    
                    this.setState(()=>{
                        return { men:json}
                     },()=>{console.log("Products in men" + this.state.men)})
                 })      
        
                 fetch('http://localhost:8000/products/women',{
                                  method:'get'  
                              })
             .then((res) => {
                 return res.json()
                })
              .then((json) => {                    
                    this.setState(()=>{
                        return { women:json}
                     },()=>{console.log("Products in state" + this.state.products)})
                 }) 

                 fetch('http://localhost:8000/products/kids',{
                                  method:'get'  
                              })
             .then((res) => {
                 return res.json()
                })
              .then((json) => {                    
                    this.setState(()=>{
                        return { kids:json}
                     },()=>{console.log("Products in kids" + this.state.kids)})
                 }) 
      
    }

    setOrders = () => {

        
        var form_data = new FormData();
            
        form_data.append("customerId", this.state.userDetails.id);

        console.log("customer details", this.state.userDetails)
        const data = new URLSearchParams();
        for (const pair of form_data) {
            data.append(pair[0], pair[1]);
        }

        fetch(`http://localhost:8000/customers/getOrders/${this.state.userDetails.id}`,{
                                  method:'get'
                              })
             .then((res) => {
                 return res.json()
                })
              .then((json) => {                    
                    this.setState(()=>{
                        return { orderDetails: json }
                     })
                 }) 
    }

    setSellerOrders = () => {
        
            console.log("sellerDetails details", this.state.sellerDetails)
    
            fetch(`http://localhost:8000/sellers/getOrders/${this.state.sellerDetails.id}`,{
                                      method:'get'
                                  })
                 .then((res) => {
                     return res.json()
                    })
                  .then((json) => {                    
                        this.setState(()=>{
                            return { sellerOrderDetails: json }
                         })
                     }) 
    }

    updateOrderStatus = (e) =>{
        console.log("select event ", e.target.value)
        const order_id = e.target.value.split("-");
        console.log(order_id[0], order_id[1])
        let order = {}
        order["id"] = order_id[0]
        order["status"] = order_id[1]

        fetch(`http://localhost:8000/orders/updateOrderStatus/?orderId=${order_id[0]}&status=${order_id[1]}`,{
              method: "GET"
            //   headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            //   },
            //   body: JSON.stringify(order)
         })
         this.setSellerOrders()
        
    }

    checkout = (payment) =>{
      
        var date = new Date()
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dateOfOrder = date.getDate()+" " + months[date.getMonth()] +" "+date.getFullYear()
        var orders = Array.from([...this.state.cart])
         orders.map(product=>{
                product.customerId = this.state.userDetails.id
                product.payment = payment
                product.dateOfOrder = dateOfOrder
                product.productId = product.id
                // product
                // delete product.id
                return null
         })

         for(var i=0;i<orders.length;i++){
        var form_data = new FormData();
        for ( var key in orders[i] ) {
            
        form_data.append(key, orders[i][key]);
        }

        const data = new URLSearchParams();
        for (const pair of form_data) {
            data.append(pair[0], pair[1]);
        }
        
        console.log("orders,",orders)

         fetch('http://localhost:8000/placeOrder/insert',{
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(orders)
         })
        }

        this.clearCart()
    }

    render() {
        return (
            <ProductContext.Provider
             value={
                {
                    ...this.state,
                    handleDetail:this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    openModal2: this.openModal2,
                    closeModal2: this.closeModal2,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    changeStatus:this.changeStatus,
                    setUser: this.setUser,
                    setSeller: this.setSeller,
                    checkout: this.checkout,
                    getItem:this.getItem,
                    setOrders:this.setOrders,
                    setSellerOrders: this.setSellerOrders,
                    handleReview:this.handleReview,
                    getReviews:this.getReviews,
                    getSellers:this.getSellers,
                    changeProducts:this.changeProducts,
                    checkCart:this.checkCart,
                    closeModalTransaction:this.closeModalTransaction,
                    getOrderItem: this.getOrderItem,
                    updateOrderStatus: this.updateOrderStatus
                }
            }>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export  {ProductProvider,ProductConsumer,ProductContext};