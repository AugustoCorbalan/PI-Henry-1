import './App.css';
import { Route } from 'react-router-dom';
import React from 'react';
import Initial_page  from './components/reactModules/Initial_page';
import Home from "./components/reactModules/Home";
import Create from './components/reactModules/CreateVideogames/Create';
import Details from './components/reactModules/Details';
import axios from 'axios';

axios.defaults.baseURL= "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Initial_page/>
      </Route>
      <Route exact path='/videogames/:genre' render={({location})=><Home location={location}/>}/>
      <Route exact path='/detail/:id' component={Details}/>
      <Route exact path='/create' component={Create}>
      </Route>
    </div>
  );
}

export default App;
