import React, { Component } from 'react';
import './ScoreBoard.css';
import ScoreCard from '../ScoreCard/ScoreCard.js';
import AddCardButton from '../AddCardButton/AddCardButton';
import { NavLink } from 'react-router-dom';

class ScoreBoard extends Component {
    render(){
        return (
            <div>
                <div>
                    <ScoreCard></ScoreCard>
                    <AddCardButton></AddCardButton>
                    <p>Ur on the board now lol</p>
                </div>
                <div>
                    <NavLink to="/"><h4>CLICK ME</h4></NavLink>
                </div>
            </div>
        )
    }
}

export default ScoreBoard;