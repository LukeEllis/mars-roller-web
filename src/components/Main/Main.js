import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage.js';
import ScoreBoard from '../ScoreBoard/ScoreBoard.js';

/*  
    The Main component renders one of the provided Routes
    (provided that one matches). Both the /HomePage and
    /ScoreBoard routes will match any pathname that starts
    with /HomePage or /ScoreBoard. The / route will only
    match when the pathname is exactly the string "/"
*/

class Main extends Component {

    constructor(props) {
        super(props);
        (()=>{})(); //removes useless constructor on console
    }

    render() {
        return(
            <main>
                <Switch>
                    <Route exact path={`/`} render={(props)=><HomePage/>} />
                    <Route exact path={`/scoreboard`} render={(props)=><ScoreBoard/>} />
                </Switch>
            </main>
        )  
    }
}

export default Main;