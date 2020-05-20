import React, {Component} from 'react';
import axios from 'axios'
import Product from '../Products/Product/Product';
import Spinner from '../Spinner/Spinner'
import Modal from '../Modal/Modal'
import UpdateDetails from '../UpdateDetails'

class Update extends Component{

    state = {
        id:null,
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

    updateProduct=(id)=>{
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
        let details  = <UpdateDetails id={this.state.theId}/>
        if(!this.state.isLoading){
            theProducts = this.state.listOfProducts.map(prd=>{
            return    <Product image={prd.image} name={prd.name} description={prd.description} clicked={()=>this.updateProduct(prd.resourceId)}/>
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

export default Update;