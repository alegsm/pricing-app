// @flow
import React from 'react';
import './App.css';
import HomeScreen from "./screens/Home/homeScreen";
import "typeface-roboto";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import WizardScreen from "./screens/wizardScreen";
import SetEmailScreen from "./screens/setEmailScreen";
import WizardEndScreen from "./screens/wizardEndScreen";

function App() {
  return (
    <div className="App">
     <Router>
         <Switch>
             <Route path="/" exact component={HomeScreen}/>
             <Route path="/wizard" exact component={WizardScreen}/>
             <Route path="/set-email" exact component={SetEmailScreen}/>
             <Route path="/wizard-end" exact component={WizardEndScreen}/>
         </Switch>
     </Router>
    </div>
  );
}

export default App;
