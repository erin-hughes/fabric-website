import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar';
import HomePage from './components/Pages/HomePage/HomePage';
import OperatorsPage from './components/Pages/OperatorsPage/OperatorsPage';
import DevelopersPage from './components/Pages/DevelopersPage/DevelopersPage';
import CommunityContributorsPage from './components/Pages/CommunityContributorsPage/CommunityContributorsPage'; 
/* import TestingPage from './components/Pages/Testing/Testing'; */

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/operators' render={() => <OperatorsPage/>}></Route>
        <Route exact path='/developers' render={() => <DevelopersPage/>}></Route>
        <Route exact path='/communitycontributors' render={() => <CommunityContributorsPage/>}></Route>
        <Route exact path='' render={() => <HomePage/>}></Route>
      </Switch>
    </div>
  );
}

export default App;



