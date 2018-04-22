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
          TR1: '0',
          TR2: '0',
          TR3: '0',
          TR4: '0',
          TR5: '0',
          Awards1: '0',
          Awards2: '0',
          Awards3: '0',
          Awards4: '0',
          Awards5: '0',
          Milestones1: '0',
          Milestones2: '0',
          Milestones3: '0',
          Milestones4: '0',
          Milestones5: '0',
          GB1: '0',
          GB2: '0',
          GB3: '0',
          GB4: '0',
          GB5: '0',
          Cards1: '0',
          Cards2: '0',
          Cards3: '0',
          Cards4: '0',
          Cards5: '0',
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
        this.tallyScores = this.tallyScores.bind(this);
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

    tallyScores() {
        console.log('tallying the scores..')
        this.setState({Score1: (this.state.TR1 + '+' + this.state.Awards1 + '+' + this.state.Milestones1 + '+' + this.state.GB1 + '+' + this.state.Cards1)})
        console.log({Score1: (this.state.TR1 + '+' + this.state.Awards1 + '+' + this.state.Milestones1 + '+' + this.state.GB1 + '+' + this.state.Cards1)})
        this.setState({Score2: (this.state.TR2 + '+' + this.state.Awards2 + '+' + this.state.Milestones2 + '+' + this.state.GB2 + '+' + this.state.Cards2)})
        console.log({Score2: (this.state.TR2 + '+' + this.state.Awards2 + '+' + this.state.Milestones2 + '+' + this.state.GB2 + '+' + this.state.Cards2)})
        this.setState({Score3: (this.state.TR3 + '+' + this.state.Awards3 + '+' + this.state.Milestones3 + '+' + this.state.GB3 + '+' + this.state.Cards3)})
        console.log({Score3: (this.state.TR3 + '+' + this.state.Awards3 + '+' + this.state.Milestones3 + '+' + this.state.GB3 + '+' + this.state.Cards3)})
        this.setState({Score4: (this.state.TR4 + '+' + this.state.Awards4 + '+' + this.state.Milestones4 + '+' + this.state.GB4 + '+' + this.state.Cards4)})
        console.log({Score4: (this.state.TR4 + '+' + this.state.Awards4 + '+' + this.state.Milestones4 + '+' + this.state.GB4 + '+' + this.state.Cards4)})
        this.setState({Score5: (this.state.TR5 + '+' + this.state.Awards5 + '+' + this.state.Milestones5 + '+' + this.state.GB5 + '+' + this.state.Cards5)})
        console.log({Score5: (this.state.TR5 + '+' + this.state.Awards5 + '+' + this.state.Milestones5 + '+' + this.state.GB5 + '+' + this.state.Cards5)})
    }

    render(){

        var TR1 = this.state.TR1;
        var TR2 = this.state.TR2;
        var TR3 = this.state.TR3;
        var TR4 = this.state.TR4;
        var TR5 = this.state.TR5;
        var Awards1 = this.state.Awards1;
        var Awards2 = this.state.Awards2;
        var Awards3 = this.state.Awards3;
        var Awards4 = this.state.Awards4;
        var Awards5 = this.state.Awards5;
        var Milestones1 = this.state.Milestones1;
        var Milestones2 = this.state.Milestones2;
        var Milestones3 = this.state.Milestones3;
        var Milestones4 = this.state.Milestones4;
        var Milestones5 = this.state.Milestones5;
        var GB1 = this.state.GB1;
        var GB2 = this.state.GB2;
        var GB3 = this.state.GB3;
        var GB4 = this.state.GB4;
        var GB5 = this.state.GB5;
        var Cards1 = this.state.Cards1;
        var Cards2 = this.state.Cards2;
        var Cards3 = this.state.Cards3;
        var Cards4 = this.state.Cards4;
        var Cards5 = this.state.Cards5;

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