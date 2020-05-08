import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mainpage.css';
import { Button, Nav, Navbar, Form, FormControl} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';


class Mainpage extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.cookies.cookies)
        this.state = { use_name: "" };
    }

    componentWillMount() {
        console.log(this.props.cookies.cookies.cur_user)
        this.setState({user_name: this.props.cookies.cookies.cur_user})
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
                <span className="main-body">
                    <div className="tweet_container">
                        <div id="profileStats">
                            <ul>
                                <li>Tweets 
                                    <span className="profileStatsNumber">1</span>
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
                                    <h3>{this.state.user_name} <span className="grey">@UofT</span></h3>
                                    <p>
                                        Another great day at UofT! <span className="hashtag">#UofT #GreatDay</span>
                                    </p>
                                </div>
                            </div>
                            <div className='tweet'>
                                <div className="tweetIconContainer">
                                </div>
                        
                                <div className="tweetContent"> 
                                    <h3>{this.state.user_name} <span className="grey">@UofT</span></h3>
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