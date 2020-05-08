import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mainpage.css';
import { Button, Navbar, Form, FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

class Mainpage extends React.Component {
    constructor(props){
        super(props)
        this.state = { usename: 'Tony' };
    }

    render(){
        return(
            <div id="whole-wrap">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="./mainpage">
                        <Button variant="light">Home</Button>
                    </Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                    <Nav.Link href="./">
                        <Button variant="light">Log in</Button>
                    </Nav.Link>
                    <Nav.Link href="./">
                        <Button variant="primary">Sign up</Button>
                    </Nav.Link>
                </Navbar>
                <span className="main-body">
                    <div className="tweet_container">
                        <div id="profileStats">
                            <ul>
                                <li>Tweets 
                                    <span className="profileStatsNumber">1</span>
                                </li>
                                <li>Followers
                                    <span className="profileStatsNumber">0</span>
                                </li>
                                <li>Following
                                    <span className="profileStatsNumber">0</span>
                                </li>
                            </ul>
                        </div>
                        <div id="profileInfo">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="..." />
                            <Card.Body>
                                <Card.Title>Tony @cuilantao</Card.Title>
                                <Card.Text>
                                Ecopia Full Stack Intern
                                </Card.Text>
                                <Button variant="primary">Follow</Button>
                            </Card.Body>
                        </Card>
                        </div>
                        <div id='timeline'>

 		                    <div className='timelineHeader'>
                                <ul>
                                    <li><span className="badge badge-secondary">Tweets</span></li>
                                </ul>
                            </div>
                            <div className='tweet'>
                                <div className="tweetIconContainer">
                                </div>

                                <div className="tweetContent"> 
                                    <h3>Tony <span className="grey">@UofT</span></h3>
                                    <p>
                                        Another great day at UofT! <span className="hashtag">#UofT #GreatDay</span>
                                    </p>
                                </div>
                            </div>
                            <div className='tweet'>
                                <div className="tweetIconContainer">
                                </div>
                        
                                <div className="tweetContent"> 
                                    <h3>Tony <span className="grey">@UofT</span></h3>
                                    <p>
                                        Check out some books at <span className="hashtag">#robarts</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        )
    }
}

export default Mainpage;