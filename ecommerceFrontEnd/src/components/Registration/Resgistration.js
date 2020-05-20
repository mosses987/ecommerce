import React, {Component} from "react";
import {Container,Form,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


class Registration extends Component{

    state = {
        userName: '',
        password: ''
    }

    


    createAccount=()=>{
        this.props.history.push('/createAccount');
    }

    getThecredentials=()=>{
        let username = document.getElementById("username").value
        let password = document.getElementById("password").value

        axios.get("http://localhost:8083/roles/start/"+username.trim()).then(res=>{

        if(res.data.username===username && res.data.password===password && res.data.role==='Admin'){
            this.props.history.push('/adminView')
        }else if(res.data.username===username && res.data.password===password && res.data.role==='User'){
            this.props.history.push('/products');
        }else{
            alert('Password incorrect')
        }
        
            // if(res.data.password==password){
            //     this.props.history.push('/products');
            // }else{
            //     alert('Password incorrect')
            // }
        }
        ).catch(err=>{
            alert('No user')
        })
        // console.log(username)
        // console.log(password)

        // this.props.history.push('/products');

    }

    render(){
        
        
        return(

            
            <div className={Container}>

                <Form>
                            
                            UserName: <input id="username" type="text" placeholder="Enter the username"/><br/><br/>
                            Password: &nbsp;<input id="password" type="password" placeholder="Enter the password"/><br/><br/>
                            
                        <Button type="button"

                        onClick={this.getThecredentials}
                        >
                            Submit
                        </Button> &nbsp; &nbsp;


                        <Button type="button"

                        onClick={this.createAccount}
                        >
                            Create An Account
                        </Button>

                        
                        
                </Form>
        

                
           
           
            </div>
            
           
           
        )
    }

}

export default Registration