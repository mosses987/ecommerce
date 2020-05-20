import React, {Component} from 'react';
import axios from 'axios'
import Product from '../Products/Product/Product';
import Spinner from '../Spinner/Spinner'
import Modal from '../Modal/Modal'
import Details from '../Details/Details'

class DeleteProducts extends Component{

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

    deleteProducts=(id)=>{

        console.log(id)
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWRtaW46YWRtaW4='   
          }
        axios.delete('http://localhost:8083/products/'+id, {
                        headers: headers}).then(res=>{
                            console.log(res.data)
                            alert('The product deleted')
                            // this.props.history.push('/products')




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







                        }).catch(res=>{
                            console.log(res)
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
            return    <Product image={prd.image} name={prd.name} id={prd.items} description={prd.description} clicked={()=>this.deleteProducts(prd.resourceId)}/>
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

export default DeleteProducts;