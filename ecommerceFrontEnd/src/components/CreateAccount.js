import React, {Component} from "react";
import {Container,Form,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class CreateAccount extends Component{


    state = {
        role: null,
        username: null,
        password: null
    }

    getThecredentials=()=>{
        if(document.getElementById('password').value!==document.getElementById('crfpassword').value){
            alert('Password not matching')
        }else{
            let username = document.getElementById('username').value
            let password = document.getElementById('crfpassword').value
            let role = document.getElementById('theuser').value

            const data = {
                role: role,
                username: username,
                password: password
            }

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Basic YWRtaW46YWRtaW4='   
              }

            axios.post('http://localhost:8083/roles', data, {
                        headers: headers}).then(res=>{
                            console.log(res.data)
                            alert('The roles added')
                            this.props.history.push('/');
                        }).catch(res=>{
                            console.log(res)
                        })




        }
        
    }
    render(){

        return(

            <div className={Container}>

                <Form>
                <select id="theuser" name="theuser">
    <option value="Admin">Admin</option>
    <option value="User">User</option>
  </select><br/><br/>
                            
                            UserName: <input id="username" type="text" placeholder="Enter the username"/><br/><br/>
                            Password: &nbsp;<input id="password" type="password" placeholder="Enter the password"/><br/><br/>
     Confirm Password: &nbsp;<input id="crfpassword" type="password" placeholder="Enter the password"/><br/><br/>
                            
                        <Button type="button"

                        onClick={this.getThecredentials}
                        >
                            Submit
                        </Button> 


                        

                        
                        
                </Form>

                </div>
        
        )
    }
}

export default CreateAccount