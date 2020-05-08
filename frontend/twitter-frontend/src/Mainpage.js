import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mainpage.css';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

class Mainpage extends React.Component {
    constructor(props){
        super(props)
        this.state = { usename: 'Tony' };
    }

    render(){
        return(
            <div id="whole-wrap">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Twitter</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" id="search-bar" type="search" placeholder="#Ecopia" aria-label="Search"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" id="search-button" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to={'./'}>
                                <button type="button" id="login-button" className="btn btn-light">Log in</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'./signup'}>
                                <button type="button" id="signup-button" className="btn btn-primary">Sign up</button>
                            </Link>
                        </li>
                        </ul>
                    </div>
                </nav>
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
                            <div className="card">
                                <img src="..." class="card-img-top" alt="..."></img>
                                <h2>Tony</h2>
                                <p className="grey">@cuilantao</p>
                                <p>
                                    Ecopia Full Stack Intern #Ecopia
                                </p>
                            </div>
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