import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mainpage.css';
import { Button, Nav, Navbar, Form, FormControl} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import axios from 'axios'

class Mainpage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tweets: [],
            num_tweets:0
        };
    }

    componentWillMount() {
        let url = new URL("http://localhost:8000/tweets/all_tweets");
        console.log(this.props.cookies.cookies.cur_user)
        url.searchParams.set('user_name', this.props.cookies.cookies.cur_user);

        axios.get(url).then(res => {
            this.setState(
                {
                    tweets: res.data,
                    num_tweets: res.data.length
                }
            )
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
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
                <span className = "main-body">
                    <div className="tweet_container">
                        <div id="profileStats">
                            <ul>
                                <li>Tweets 
                                    <span className="profileStatsNumber">{this.state.num_tweets}</span>
                                </li>
                            </ul>
                        </div>
                        <div id="profileInfo">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{this.state.user_name}</Card.Title>
                                <Card.Text>
                                Ecopia Full Stack Intern
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                </span>
                <span className="main-body">
                    <div className="tweet_container">
                        <div id='timeline'>
 		                    <div className='timelineHeader'>
                                <ul>
                                    <li><span className="badge badge-secondary">Tweets</span></li>
                                </ul>
                            </div>
                            {
                                this.state.tweets.map(item => (
                                    <div className="tweetContent"> 
                                        <h3>{item.title}</h3>
                                        <p>
                                            {item.content}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </span>
            </div>
        )
    }
}

export default Mainpage;