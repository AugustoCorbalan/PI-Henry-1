import './App.css';
import { Route } from 'react-router-dom';
import React from 'react';
import Initial_page  from './components/Initial_page';
import Home from "./components/Home";
import Create from './components/Create';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Initial_page/>
      </Route>
      <Route exact path='/videogames/:genre' component={Home}/>
      <Route exact path='/detail/:id' component={Details}/>
      <Route exact path='/create'>
        <Create/>
      </Route>
    </div>
  );
}

export default App;
