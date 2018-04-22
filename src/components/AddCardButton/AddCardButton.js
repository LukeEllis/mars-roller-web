import React, { Component } from 'react';
import './AddCardButton.css';
import {Col, Button} from 'react-materialize'
import ScoreCard from '../ScoreCard/ScoreCard.js';

class AddCardButton extends Component {

    state = {
         numCards: 0
    }
    
    render(){

        const cards = [];

        for (var i = 0; i < this.state.numCards; i += 1) {
            cards.push(<ScoreCard key={i} number={i} />);
        };

        return (
            <ParentComponent addCard={this.onAddCard}>
                {cards}
            </ParentComponent>
        )
    }

    onAddCard = () => {
        this.setState({
            numCards: this.state.numCards + 1
        });
        console.log('hello world');
    }

}

const ParentComponent = props => (
    <div>
        <Col m={6} s={12}>
            <div id="cards-pane">
                {props.children}
            </div>
            <Button onClick={props.addCard}>
                Score Card +
            </Button>
        </Col>
    </div>
)

export default AddCardButton;