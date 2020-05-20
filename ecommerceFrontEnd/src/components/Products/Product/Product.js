import React from 'react';
import Container from 'react-bootstrap/Container'
import Auxillary from '../../../hoc/Auxillary'

const styles = {
    display: "inline-block",
    margin : "10px"
}
const product = (props)=>(

 

<div className={Container} style={styles}>
        <a href="#"><img src={props.image} id={props.id} className="img-rounded" alt="Cinque Terre" width="304" height="236" onClick={props.clicked}/></a>
        
        <h2>{props.name}</h2>
        <p>{props.description}</p>   
    </div>
    
    
)

export default product