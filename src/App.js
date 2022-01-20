import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Nav from './Components/Nav/Nav';
import Main from './Components/screens/MainScreen/MainScreen';
// import DnD from './Components/Games/DnD/DnD';
import L5RScreen from './Components/screens/L5RScreen/L5Rscreen';
import L5rNewCharacterScreen from './Components/L5R/CharacterCreation/NewCharacterL5R';
// import { withRouter } from 'react-router';
// import FiveRingsCharacterCreation from './Components/FiveRings/FiveRingsCreateCharacter';
// import Q2Family from './Components/CharacterCreation/L5R Questions/Q2.Family';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="canvas">
        <div className="routes-components">
          <Switch>
            <Route exact path="/" component={Main} />
            {/* <Route exact path="/dnd" component={DnD} /> */}
            <Route exact path="/l5r" component={L5RScreen} />
            <Route exact path="/characterCreation/l5r" component={L5rNewCharacterScreen} />
            {/* <Route exact path="/character-creation-:game" component={FiveRingsCharacterCreation} /> */}
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
