import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepages/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth} from './firbase/firebase.utils'
class App extends React.Component {
  constructor()
  {
    super();
    this.state=
    {
      currentUser:null
    }
  }
  unscubscribeFromAuth=null;
  componentDidMount()
  {
    this.unscubscribeFromAuth=auth.onAuthStateChanged(user=>
      {
        this.setState({currentUser:user});
        console.log(user)
      })
  }
  componentWillUnmount()
  {
    this.unscubscribeFromAuth();
  }
  render()
  {
  return (
    <div >
      <Header currentUser={this.state.currentUser}></Header>
      <Switch>
      <Route exact path='/shop' component={ShopPage}></Route>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/signin' component={SignInAndSignUpPage}></Route>
        <Route exact path='/signout' component={SignInAndSignUpPage}></Route>
        
      </Switch>
    </div>
  );
}
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
