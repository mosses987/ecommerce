import React from 'react';
import ProductDisplay from './components/Products/Product/ProductDisplay'
import './App.css';
import Products from '../src/components/Products/Products'
import Modal from '../src/components/Modal/Modal'
import Resgistration from '../src/components/Registration/Resgistration'
import { BrowserRouter, Route } from 'react-router-dom'
import AdminView from '../src/components/AdminView/AdminView'
import AddItems from '../src/components/AdminView/AddItems'
import DeleteProducts from '../src/components/AdminView/DeleteProducts'
import Update from '../src/components/AdminView/Update'
import UpdateItems from '../src/components/AdminView/UpdateItems'
import CreateAccount from '../src/components/CreateAccount'

function App() {

  return (

    
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
    {/* <ModalApp/> */} 
      {/* <Products/> */}
     {/* <AdminView/> */}
        
          <Route exact path="/" component={Resgistration}/>
     <Route exact path="/products" component={Products}/>
     <Route exact path="/adminView" component={AdminView}/>
     <Route exact path="/addItems" component={AddItems}/>
     <Route exact path="/deleteItems" component={DeleteProducts}/>
     <Route exact path="/update" component={Update}/>
     <Route exact path="/updateItems" component={UpdateItems}/>
     <Route exact path="/createAccount" component={CreateAccount}/>
        
      
       </header>
      
      
    </div>
    </BrowserRouter> 
    
  );
}

export default App;
