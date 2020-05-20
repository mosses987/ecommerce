import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class AdminView extends Component{

    listAllProducts = ()=>{
        this.props.history.push('/products');
    }

    addItems=()=>{
        this.props.history.push('/addItems');
    }

    deleteItems=()=>{
        this.props.history.push('/deleteItems')
    }

    updateItems=()=>{
        this.props.history.push('/update')
    }
    render(){
        return(
            <div>
                <Button variant="info" onClick={this.listAllProducts}>List all products</Button><br/><br/>
                <Button variant="primary" onClick={this.addItems}>Add Item</Button><br/><br/>

                
            <Button variant="danger" onClick={this.deleteItems}>Delete item</Button><br/><br/>
            <Button variant="success" onClick={this.updateItems}>Update item</Button>
            
            </div>
        )
    }
}

export default AdminView