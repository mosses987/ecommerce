import React, {Component} from 'react'
import axios from 'axios'
import {Container,Form,Button} from 'react-bootstrap'
import Spinner from '../../components/Spinner/Spinner'

class AddItems extends Component{

    state = {
        image : null,
        name: null,
        price : -1,
        description : "",
        category : "",
        productInfo : {
          width : "",
          height : "",
          weight : "",
          price : -1,
          quantity : -1,
          shippingFee : -1
          
          },

        shouldLoad : false
      }
      updateNew=()=>{

        const c = this.props.location.state
        // console.log(this.props.state.detail)
      }

      updateItems = ()=>{
        const c = this.props.location.state
        console.log(c)
  
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
        console.log(image + 
            price +
            name +
            desc  +
            cate  +
            width +
            height+
            weight+
            quantity+
            shippingfee)

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

                        const data = this.state
                        const headers = {
                            'Content-Type': 'application/json',
                            'Authorization': 'Basic YWRtaW46YWRtaW4='   
                          }
                          

                        axios.post('http://localhost:8083/products/', data, {
                        headers: headers}).then(res=>{
                            console.log(res.data)
                            alert('The product Added')

                        }).catch(res=>{
                            console.log(res)
                        })
                }, 2000);

           
    }

    redirect=()=>{
        this.props.history.push('/products')
    }

    render(){
    
        let theButton = null

        if(this.state.shouldLoad){
            theButton = <Button variant="success" type="button" onClick={this.redirect}>
        View The Products
        </Button>
        }

        console.log('Hello updateitems')
        
        
        return(

            
            <div className={Container}>
                <Form>

                    
                    Image: <input id="image" type="text" placeholder="Enter Image URL"/><br/><br/>
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
                    Click To Add Items
                    </Button>&nbsp; &nbsp; &nbsp;
                    {theButton}

                    <br/>
                    <br/>
  {/* <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" placeholder="Enter email" />
  
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="button" onClick={this.fetchValues}>
    Submit
  </Button> */}
</Form>
            </div>
        )
    }
}

export default AddItems

// {
//     image : next.image,
// name: name,
// price : price,
// description : desc,
// category : cate,
// productInfo : {
// width : width,
// height : height,
// weight : weight,
// price : price,
// quantity : quantity,
// shippingFee : shippingfee

// }