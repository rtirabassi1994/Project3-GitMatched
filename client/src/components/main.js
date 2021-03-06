import React from 'react';
import Landing from '../pages/LandingPage';
import MyAccount from '../pages/MyAccount';
import Matches from '../pages/MatchesPage';
import {Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/matches" component={Matches} />
        
    </Switch>
)

export default Main;