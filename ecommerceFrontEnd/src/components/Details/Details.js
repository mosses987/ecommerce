import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'
class Details extends Component{

    constructor(props){
        super()
    }

    state = {
        theProduct : null, 
        isLoaded: false
    }

    // shouldComponentUpdate ( nextProps, nextState ){
    //     console.log(nextProps.id !== this.props.id)
    //     console.log(nextProps.id+" "+this.props.id)
    //     return nextProps.id !== this.props.id || (nextProps.children !== this.props.children);
    // }
    componentDidUpdate(){

        axios.get(`http://localhost:8083/products/`+this.props.id)
          .then(res => {

            // console.log(res)

            this.setState({
                theProduct: res.data,
                isLoaded: true
            })
            console.log(this.state.isLoaded)
            console.log(res)
          }).catch(err=>{
              console.log(err)
          })
    }

    render(){

       let theDetails = <Spinner/>
       if(this.state.isLoaded){
           console.log(this.state.isLoaded+"asdfdg")
           theDetails = <div style={{color:"black"}}>
                        
           <p>Name: {this.state.theProduct.name}</p>
           <p>Category: {this.state.theProduct.category}</p>
           <p>Description: {this.state.theProduct.description}</p>
           <p>Height: {this.state.theProduct.productInfo.height}</p>
           <p>Weight: {this.state.theProduct.productInfo.weight}</p>
           <p>Width: {this.state.theProduct.productInfo.width}</p>
           <p>Quantity: {this.state.theProduct.productInfo.quantity}</p>
           <p>ShippingFee: {this.state.theProduct.productInfo.shippingFee}</p>
           <p>Price: {this.state.theProduct.productInfo.price}</p>
           
               </div>
       }
       
        return(

            theDetails
            
        )
    }
}

export default Details