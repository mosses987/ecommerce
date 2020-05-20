import React, { Component } from 'react';

import axios from 'axios'
import Spinner from '../components/Spinner/Spinner'
import {Container,Form,Button} from 'react-bootstrap'
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
    //     return nextProps.id !== this.props.id ;
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

    updateNew = ()=>{
        const data = this.state

        let image  = document.getElementById('image').value
        
        let price  = parseInt(document.getElementById('price').value.trim())
        let name  = document.getElementById('name').value
        let desc  = document.getElementById('desc').value
        let cate  = document.getElementById('cate').value
        let width  = document.getElementById('width').value
        let height  = document.getElementById('height').value
        let weight  = document.getElementById('weight').value
        let quantity  = parseInt(document.getElementById('quantity').value.trim())
        let shippingfee  = parseInt(document.getElementById('shippingfee').value.trim())

        this.setState({
            image : image,
            name: name,
            price : price,
            description : desc,
            category : cate,
            productInfo : {
            width : width,
            height : height,
            weight : weight,
            price : price,
            quantity : quantity,
            shippingFee : shippingfee
            
            }
        }
                ,console.log(this.state))




                setTimeout(() => {

                    console.log('88888888888888888888888')
                    console.log(this.state)
                    const data = this.state

                    // const vals = Object.keys(data).filter(key=>{
                    //     if(data[key].length<=0 || !data[key]){
                    //         return key
                    //     }
                   
                    // })
                    // console.log(vals)

                    // const data1 = this.state.productInfo
                    // const vals1 = Object.keys(data1).filter(key=>{
                    //     if(typeof(data[key])==='string'){
                    //         if(data[key].trim().length===0){
                    //             return key
                    //         }
                    //     }else if(data[key]===NaN){
                    //         return key
                    //     }
                    // })
                    // console.log(vals1)

                    // const final  = vals.concat(vals1)
                    
                    const headers = {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic YWRtaW46YWRtaW4='   
                      }
                      console.log(this.props.id)
                      
            
                    axios.patch('http://localhost:8083/products/'+this.props.id, data, {
                    headers: headers}).then(res=>{
                        
                        alert('The product updated')


                        axios.get(`http://localhost:8083/products/`+this.props.id)
          .then(res => {

            // console.log(res)
            


            this.setState({
                theProduct: res.data,
                isLoaded: true
            })
            
            window.location.reload()
          }).catch(err=>{
              console.log(err)
          })


            
                    }).catch(res=>{
                        console.log(res)
                        alert('The product not updated')
                    })

                }, 1000);


            

    }

    

    render(){

        
       let theDetails = <Spinner/>
       if(this.state.isLoaded){
        theDetails = 
        <div className={Container}>
        <Form>

            
            Image: <input id="image" type="text"  placeholder="Enter Image URL"/><br/><br/>
            Name: <input id="name" type="text" placeholder="Enter the name of Product"/><br/><br/>
            Price: <input id="price" type="text" placeholder="Enter the Price"/><br/><br/>
            Description: <input id="desc" type="text" placeholder="Enter description"/><br/><br/>
            Category: <input id="cate"type="text" placeholder="Enter category"/><br/><br/>
            Width: <input id="width" type="text" placeholder="Enter width"/><br/><br/>
            Height: <input id="height" type="text" placeholder="Enter Height"/><br/><br/>
            Weight: <input id="weight" type="text" placeholder="Enter Weight"/><br/><br/>
            Quantity: <input id="quantity" type="text" placeholder="Enter quantity"/><br/><br/>
            Shipping Fee: <input id="shippingfee"type="text" placeholder="Enter shipping fee"/><br/><br/>

            <Button variant="primary" type="button" onClick={this.updateNew}>
            Click To Update Selected Item
            </Button>

            <br/>
            <br/>
        </Form>
    </div>
       }
       
        return(

            theDetails
            
        )
    }
}

export default Details