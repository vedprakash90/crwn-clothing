import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepages/homepage.component'
function App() {
  return (
    <div >
      <switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/hats' component={HatsPage}></Route>
      </switch>
    </div>
  );
}
const HatsPage=()=>
{
    return (
    <div>
        <h1>
            HATS PAGE
        </h1>
    </div>);
}
export default App;
