import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepages/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
function App() {
  return (
    <div >
      <switch>
      <Route exact path='/shop' component={ShopPage}></Route>
        <Route exact path='/' component={HomePage}></Route>
        
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
