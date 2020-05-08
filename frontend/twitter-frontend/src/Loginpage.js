import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios"
import './App.css'; 
/* Component for the SignInPage page */ 

class LogInPage extends React.Component {
    constructor(props){
        super(props);
        this.user_name = React.createRef();
        this.password = React.createRef();
        this.state = {

        }
    }

    checkcrendential = () => {
        axios.post('http://localhost:8000/user/create/', {
            "user_name": this.user_name.current.value,
            "password": this.password.current.value
        }).then(
            res => {
                console.log(res);
            }
        )
    }

    render(){
        return (
            <div>
                <div id="login-form">
                    <Form>
                        <Form.Group>
                            <h3><center className="White">Login to begin</center></h3>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="White">Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter your email" onChange = {this.update_email}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="White">Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" onChange = {this.update_password}></Form.Control>
                        </Form.Group>
                        <center>
                        <Button variant="primary">Submit</Button>
                        </center>
                    </Form>
                </div>
            </div>
        )
    }

}



export default LogInPage;