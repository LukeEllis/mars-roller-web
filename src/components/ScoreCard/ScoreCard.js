import React, { Component } from 'react';
import './ScoreCard.css';
import {Card, Col} from 'react-materialize'

class ScoreCard extends Component {

    render(){
        return (
            <div>
                <Col m={6} s={12}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Score Card {Number}'>
                    Game [Number] Score
                    </Card>
                </Col>
            </div>
        )
    }
}

export default ScoreCard;