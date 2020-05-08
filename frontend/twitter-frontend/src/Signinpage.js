import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios"
/* Component for the SignInPage page */ 

class SignInPage extends React.Component {
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
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref = {this.user_name}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref = {this.password}/>
                    </Form.Group>
                    <Button variant="primary" onClick = {this.checkcrendential}>
                        LOGIN
                    </Button>
                </Form>
            </div>
        )
    }

}



export default SignInPage;