import React, {Component} from 'react';
import axios from 'axios'
import Spinner from '../../Spinner/Spinner'
import Auxillary from '../../../hoc/Auxillary'

class ProductDisplay extends Component{

    state = {
        listOfProducts: null,
        isLoading: true
    }

    componentDidMount(){
        axios.get(`http://localhost:8083/products`)
          .then(res => {
              console.log(res.data._embedded.products[4])
              this.setState({
                  listOfProducts : res.data._embedded.products,
                  isLoading: false
              })
              
            
          }).catch(err=>{
              console.log(err)
          })
    }
    render(){

        let theProducts = <Spinner/>
        if(!this.state.isLoading){
            theProducts = <p>Yes</p>
        }
        return(
            <Auxillary>
                {theProducts}
            </Auxillary>
            

        )
    }
}

export default ProductDisplay