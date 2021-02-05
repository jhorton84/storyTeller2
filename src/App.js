import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav.js';
import Main from './Components/Main/Main';
import DnD from './Components/Games/DnD/DnD';
import L5R from './Components/Games/L5R/L5R';
// import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router';
import CharacterCreation from './Components/CharacterCreation/CharacterCreation';
import Q2Family from './Components/CharacterCreation/L5R Questions/Q2.Family';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="canvas">
        <div className="routes-components">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/dnd" component={DnD} />
            <Route exact path="/l5r" component={L5R} />
            <Route exact path="/character-creation-:game" component={CharacterCreation} />
            <Route exact path="/character-creation-L5R/Family/:clan" component={Q2Family} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
