import React, { Component } from 'react';
import './ScoreBoard.css';
import { NavLink } from 'react-router-dom';
import {Row, Input, Button, Col} from 'react-materialize'

class ScoreBoard extends Component {

    constructor (props) {

        super(props)

        this.state = {
          Player1: '',
          Player2: '',
          Player3: '',
          Player4: '',
          Player5: '',
          TR1: '',
          TR2: '',
          TR3: '',
          TR4: '',
          TR5: '',
          Awards1: '',
          Awards2: '',
          Awards3: '',
          Awards4: '',
          Awards5: '',
          Milestones1: '',
          Milestones2: '',
          Milestones3: '',
          Milestones4: '',
          Milestones5: '',
          GB1: '',
          GB2: '',
          GB3: '',
          GB4: '',
          GB5: '',
          Cards1: '',
          Cards2: '',
          Cards3: '',
          Cards4: '',
          Cards5: '',
          Score1: '',
          Score2: '',
          Score3: '',
          Score4: '',
          Score5: '',
        };
        this.handlePlayer1Change = this.handlePlayer1Change.bind(this);
        this.handlePlayer2Change = this.handlePlayer2Change.bind(this);
        this.handlePlayer3Change = this.handlePlayer3Change.bind(this);
        this.handlePlayer4Change = this.handlePlayer4Change.bind(this);
        this.handlePlayer5Change = this.handlePlayer5Change.bind(this);
        this.handleTR1Change = this.handleTR1Change.bind(this);
        this.handleTR2Change = this.handleTR2Change.bind(this);
        this.handleTR3Change = this.handleTR3Change.bind(this);
        this.handleTR4Change = this.handleTR4Change.bind(this);
        this.handleTR5Change = this.handleTR5Change.bind(this);
        this.handleAwards1Change = this.handleAwards1Change.bind(this);
        this.handleAwards2Change = this.handleAwards2Change.bind(this);
        this.handleAwards3Change = this.handleAwards3Change.bind(this);
        this.handleAwards4Change = this.handleAwards4Change.bind(this);
        this.handleAwards5Change = this.handleAwards5Change.bind(this);
        this.handleMilestones1Change = this.handleMilestones1Change.bind(this);
        this.handleMilestones2Change = this.handleMilestones2Change.bind(this);
        this.handleMilestones3Change = this.handleMilestones3Change.bind(this);
        this.handleMilestones4Change = this.handleMilestones4Change.bind(this);
        this.handleMilestones5Change = this.handleMilestones5Change.bind(this);
        this.handleGB1Change = this.handleGB1Change.bind(this);
        this.handleGB2Change = this.handleGB2Change.bind(this);
        this.handleGB3Change = this.handleGB3Change.bind(this);
        this.handleGB4Change = this.handleGB4Change.bind(this);
        this.handleGB5Change = this.handleGB5Change.bind(this);
        this.handleCards1Change = this.handleCards1Change.bind(this);
        this.handleCards2Change = this.handleCards2Change.bind(this);
        this.handleCards3Change = this.handleCards3Change.bind(this);
        this.handleCards4Change = this.handleCards4Change.bind(this);
        this.handleCards5Change = this.handleCards5Change.bind(this);
    }

    handlePlayer1Change(event) {
        this.setState({Player1: event.target.value})
        console.log({Player1: event.target.value})
    }

    handlePlayer2Change(event) {
        this.setState({Player2: event.target.value})
        console.log({Player2: event.target.value})
    }

    handlePlayer3Change(event) {
        this.setState({Player3: event.target.value})
        console.log({Player3: event.target.value})
    }

    handlePlayer4Change(event) {
        this.setState({Player4: event.target.value})
        console.log({Player4: event.target.value})
    }

    handlePlayer5Change(event) {
        this.setState({Player5: event.target.value})
        console.log({Player5: event.target.value})
    }

    handleTR1Change(event) {
        this.setState({TR1: event.target.value})
        console.log({TR1: event.target.value})
    }

    handleTR2Change(event) {
        this.setState({TR2: event.target.value})
        console.log({TR2: event.target.value})
    }

    handleTR3Change(event) {
        this.setState({TR3: event.target.value})
        console.log({TR3: event.target.value})
    }

    handleTR4Change(event) {
        this.setState({TR4: event.target.value})
        console.log({TR4: event.target.value})
    }

    handleTR5Change(event) {
        this.setState({TR5: event.target.value})
        console.log({TR5: event.target.value})
    }

    handleAwards1Change(event) {
        this.setState({Awards1: event.target.value})
        console.log({Awards1: event.target.value})
    }

    handleAwards2Change(event) {
        this.setState({Awards2: event.target.value})
        console.log({Awards2: event.target.value})
    }

    handleAwards3Change(event) {
        this.setState({Awards3: event.target.value})
        console.log({Awards3: event.target.value})
    }

    handleAwards4Change(event) {
        this.setState({Awards4: event.target.value})
        console.log({Awards4: event.target.value})
    }

    handleAwards5Change(event) {
        this.setState({Awards5: event.target.value})
        console.log({Awards5: event.target.value})
    }

    handleMilestones1Change(event) {
        this.setState({Milestones1: event.target.value})
        console.log({Milestones1: event.target.value})
    }

    handleMilestones2Change(event) {
        this.setState({Milestones2: event.target.value})
        console.log({Milestones2: event.target.value})
    }

    handleMilestones3Change(event) {
        this.setState({Milestones3: event.target.value})
        console.log({Milestones3: event.target.value})
    }

    handleMilestones4Change(event) {
        this.setState({Milestones4: event.target.value})
        console.log({Milestones4: event.target.value})
    }

    handleMilestones5Change(event) {
        this.setState({Milestones5: event.target.value})
        console.log({Milestones5: event.target.value})
    }

    handleGB1Change(event) {
        this.setState({GB1: event.target.value})
        console.log({GB1: event.target.value})
    }

    handleGB2Change(event) {
        this.setState({GB2: event.target.value})
        console.log({GB2: event.target.value})
    }

    handleGB3Change(event) {
        this.setState({GB3: event.target.value})
        console.log({GB3: event.target.value})
    }

    handleGB4Change(event) {
        this.setState({GB4: event.target.value})
        console.log({GB4: event.target.value})
    }

    handleGB5Change(event) {
        this.setState({GB5: event.target.value})
        console.log({GB5: event.target.value})
    }

    handleCards1Change(event) {
        this.setState({Cards1: event.target.value})
        console.log({Cards1: event.target.value})
    }

    handleCards2Change(event) {
        this.setState({Cards2: event.target.value})
        console.log({Cards2: event.target.value})
    }

    handleCards3Change(event) {
        this.setState({Cards3: event.target.value})
        console.log({Cards3: event.target.value})
    }

    handleCards4Change(event) {
        this.setState({Cards4: event.target.value})
        console.log({Cards4: event.target.value})
    }

    handleCards5Change(event) {
        this.setState({Cards5: event.target.value})
        console.log({Cards5: event.target.value})
    }

    // Note: Using this breaks the app lol
    tallyScores() {
        console.log('tallying the scores..')
        return this.state.TR1;
    }

    render(){
        return (
            <div>
                <div>
                    <p>You are on the Scoreboard page.</p>
                    <NavLink to="/"><h4>CLICK ME</h4></NavLink>
                </div>
                <div>
                    <Row>
                        <Input placeholder="Game {Number}" s={2} label="Game #" />
                        <Input placeholder="Player 1" s={2} label="Player1" value={this.state.Player1} onChange={this.handlePlayer1Change} />
                        <Input placeholder="Player 2" s={2} label="Player2" value={this.state.Player2} onChange={this.handlePlayer2Change} />
                        <Input placeholder="Player 3" s={2} label="Player3" value={this.state.Player3} onChange={this.handlePlayer3Change} />
                        <Input placeholder="Player 4" s={2} label="Player4" value={this.state.Player4} onChange={this.handlePlayer4Change} />
                        <Input placeholder="Player 5" s={2} label="Player5" value={this.state.Player5} onChange={this.handlePlayer5Change} />

                        <Input placeholder="Terraforming Rating" s={2} label="Terraforming Rating" />
                        <Input placeholder="0" s={2} label="TR1" value={this.state.TR1} onChange={this.handleTR1Change} />
                        <Input placeholder="0" s={2} label="TR2" value={this.state.TR2} onChange={this.handleTR2Change} />
                        <Input placeholder="0" s={2} label="TR3" value={this.state.TR3} onChange={this.handleTR3Change} />
                        <Input placeholder="0" s={2} label="TR4" value={this.state.TR4} onChange={this.handleTR4Change} />
                        <Input placeholder="0" s={2} label="TR5" value={this.state.TR5} onChange={this.handleTR5Change} />

                        <Input placeholder="Awards" s={2} label="Awards" />
                        <Input placeholder="0" s={2} label="Awards1" value={this.state.Awards1} onChange={this.handleAwards1Change} />
                        <Input placeholder="0" s={2} label="Awards2" value={this.state.Awards2} onChange={this.handleAwards2Change} />
                        <Input placeholder="0" s={2} label="Awards3" value={this.state.Awards3} onChange={this.handleAwards3Change} />
                        <Input placeholder="0" s={2} label="Awards4" value={this.state.Awards4} onChange={this.handleAwards4Change} />
                        <Input placeholder="0" s={2} label="Awards5" value={this.state.Awards5} onChange={this.handleAwards5Change} />

                        <Input placeholder="Milestones" s={2} label="Milestones" />
                        <Input placeholder="0" s={2} label="Milestones1" value={this.state.Milestones1} onChange={this.handleMilestones1Change} />
                        <Input placeholder="0" s={2} label="Milestones2" value={this.state.Milestones2} onChange={this.handleMilestones2Change} />
                        <Input placeholder="0" s={2} label="Milestones3" value={this.state.Milestones3} onChange={this.handleMilestones3Change} />
                        <Input placeholder="0" s={2} label="Milestones4" value={this.state.Milestones4} onChange={this.handleMilestones4Change} />
                        <Input placeholder="0" s={2} label="Milestones5" value={this.state.Milestones5} onChange={this.handleMilestones5Change} />

                        <Input placeholder="Game board" s={2} label="Game board" />
                        <Input placeholder="0" s={2} label="GB1" value={this.state.GB1} onChange={this.handleGB1Change} />
                        <Input placeholder="0" s={2} label="GB2" value={this.state.GB2} onChange={this.handleGB2Change} />
                        <Input placeholder="0" s={2} label="GB3" value={this.state.GB3} onChange={this.handleGB3Change} />
                        <Input placeholder="0" s={2} label="GB4" value={this.state.GB4} onChange={this.handleGB4Change} />
                        <Input placeholder="0" s={2} label="GB5" value={this.state.GB5} onChange={this.handleGB5Change} />

                        <Input placeholder="Cards" s={2} label="Cards" />
                        <Input placeholder="0" s={2} label="Cards1" value={this.state.Cards1} onChange={this.handleCards1Change} />
                        <Input placeholder="0" s={2} label="Cards2" value={this.state.Cards2} onChange={this.handleCards2Change} />
                        <Input placeholder="0" s={2} label="Cards3" value={this.state.Cards3} onChange={this.handleCards3Change} />
                        <Input placeholder="0" s={2} label="Cards4" value={this.state.Cards4} onChange={this.handleCards4Change} />
                        <Input placeholder="0" s={2} label="Cards5" value={this.state.Cards5} onChange={this.handleCards5Change} />

                        <Input placeholder="Scores" s={2} label="Scores" />
                        <Input placeholder="0" s={2} label="Score1" value={this.state.Score1} />
                        <Input placeholder="0" s={2} label="Score2" value={this.state.Score2} />
                        <Input placeholder="0" s={2} label="Score3" value={this.state.Score3} />
                        <Input placeholder="0" s={2} label="Score4" value={this.state.Score4} />
                        <Input placeholder="0" s={2} label="Score5" value={this.state.Score5} />
                    </Row>

                    <Col m={6} s={12}>
                        <Button onClick={this.tallyScores}>
                                Tally the scores!
                        </Button>
                    </Col>

                    <br />

                    <Col m={6} s={12}>
                        <Button>
                            Who won?
                        </Button>
                    </Col>
                </div>
            </div>
        )
    }
}

export default ScoreBoard;