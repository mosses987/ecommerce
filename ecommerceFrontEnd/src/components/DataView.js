import React, {Component} from 'react';
import axios from 'axios'


class DataViewDemo extends Component {

    state = {
        listOfProducts : null
        
    }

     body = {
        "image" : "imAasasdaDage from net",
        "name": "iphone",
        "price" : 44,
        "description" : "44gb",
        "category" : "phone",
        "productInfo" : {
          "width" : "33mm",
          "height" : "44mm",
          "weight" : "0.5kg",
          "price" : 44,
          "quantity" : 1,
          "shippingFee" : 55
          
          }
      }

      config = {
        headers: {
            "Authorization": "Basic YWRtaW46YWRtaW4=",
            "Content-Type" : "application/json"
        }
    }
    componentDidMount() {
        axios.post(`http://localhost:8083/products`, this.body, this.config)
          .then(res => {
              console.log(res.data)
            
          }).catch(err=>{
              console.log(err)
          })
      }

      render(){

        return(
        <p>Hello</p>

        )
      }

    
}

export default DataViewDemo