import React, { Component } from 'react';
import './HomePage.css';
import ScoreCard from '../ScoreCard/ScoreCard.js';
import AddCardButton from '../AddCardButton/AddCardButton';
import { NavLink } from 'react-router-dom';

class HomePage extends Component {
    render(){
        return (
            <div>
                <div>
                    <ScoreCard></ScoreCard>
                    <AddCardButton></AddCardButton>
                    <p>You are on the Home Page.</p>
                </div>
            </div>
        )
    }
}

export default HomePage;

/* <div>
        <NavLink to="/scoreboard"><h4>CLICK ME</h4></NavLink>
    </div> */