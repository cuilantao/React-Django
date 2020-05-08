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
        let url = new URL('http://localhost:8000/user/loginattempt/');
        url.searchParams.set('user_name', this.user_name.current.value);
        url.searchParams.set('password', this.password.current.value)
        url = url.href;

        axios.get(url).then(
            res => {
                if (res.data.length == 0){
                    window.alert("Wrong User Name or Password, Maybe sign up first.")
                }
                else{
                    let user_name = res.data[0].user_name
                    this.props.cookies.setCookie("cur_user", user_name, {
                        path : "/",
                        expires: 0
                    });
                    console.log(this.props.cookies)

                }
            }
        ).catch(
            error => {
                console.log(error)
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
                        Sign In
                    </Button>
                </Form>
            </div>
        )
    }

}



export default SignInPage;