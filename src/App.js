import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Header} from "./components/Header";
import {MostPopular} from "./components/MostPopular";
import {DetailsMovie} from "./components/DetailsMovie";
import {Add} from "./components/Add";
import './App.css';


import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
  
    <Router>
      <Header/>

      <Switch>
        <Route exact path="/"> 
            <MostPopular />
        </Route>

        <Route path ="/details"> 
            <DetailsMovie />
        </Route>

        <Route path ="/add"> 
            <Add />
        </Route>
      </Switch>
    </Router>
        
    </GlobalProvider>
  );
}

export default App;
