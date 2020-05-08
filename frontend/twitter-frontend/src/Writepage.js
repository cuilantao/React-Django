import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, Form, FormControl} from 'react-bootstrap'
import axios from "axios"
import './Signinpage.css'
import './Mainpage.css'


class Writepage extends React.Component {
    constructor(props){
        super(props);
        this.title = React.createRef();
        this.content = React.createRef();
        console.log(this.props.cookies.cookies.cur_user)
    }

    getRedirected = () => {
        window.location.href = './mainpage'
    }

    createtweet = () => {
        axios.post('http://localhost:8000/tweets/create_tweets/', {
            "user": this.props.cookies.cookies.cur_user,
            "title": this.title.current.value,
            "content": this.content.current.value
        }).then(
            res => {
                console.log(res);
                this.getRedirected()
            }
        ).catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <div id="whole-wrap">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="./mainpage">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                    <Nav.Link href="./write">
                        <Button variant="light" id="write-button">Write something</Button>
                    </Nav.Link>
                    </Form>
                    <Nav.Link href="./">
                        <Button variant="warning">Sign out</Button>
                    </Nav.Link>
                </Navbar>
                <div id = "loginpanel">
                    <Form>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Tweet Title</Form.Label>
                            <Form.Control type="title" placeholder="title" ref = {this.title}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicContent">
                            <Form.Label> Tweet Content</Form.Label>
                            <Form.Control as="textarea" rows="5" type="content" placeholder="content" ref = {this.content}/>
                        </Form.Group>
                        <Button variant="primary" onClick = {this.createtweet}>
                            Tweet
                        </Button>

                    </Form>
                </div>
            </div>
        )
    }
}


export default Writepage;