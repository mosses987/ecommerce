import React, {Component} from 'react';
import axios from 'axios'
import Product from './Product/Product';
import Spinner from '../Spinner/Spinner'
import Modal from '../Modal/Modal'
import Details from '../Details/Details'
class Products extends Component{

    state = {
        listOfProducts: null,
        isLoading: true,
        showModal: false,
        theId:-1
    }
    componentDidMount(){
        axios.get(`http://localhost:8083/products`)
          .then(res => {
            console.log(res.data._embedded.products)
              this.setState({
                  listOfProducts : res.data._embedded.products,
                  isLoading: false
              })
              
            
          }).catch(err=>{
              console.log(err)
          })
    }

    showDetails=(id)=>{
        console.log(id)
        this.setState({
            showModal: true,
            theId:id
        })
    }

    dontShowDetails=()=>{
        this.setState({
            showModal: false
        })
    }
    render(){

        let theProducts = <Spinner/>
        let details  = <Details id={this.state.theId}/>
        if(!this.state.isLoading){
            theProducts = this.state.listOfProducts.map(prd=>{
            return    <Product image={prd.image} name={prd.name} id={prd.id} description={prd.description} clicked={()=>this.showDetails(prd.resourceId)}/>
            })
        }

        
        return(
            <div>
                <Modal show={this.state.showModal} modalClosed={this.dontShowDetails}>
                    {details}
                </Modal>
                {theProducts}
                
            </div>
        )
    }
}

export default Products;