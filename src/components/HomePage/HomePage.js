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
                    <p>Ur on the homepage now lol</p>
                </div>
                <div>
                    <NavLink to="/scoreboard"><h4>CLICK ME</h4></NavLink>
                </div>
            </div>
        )
    }
}

export default HomePage;