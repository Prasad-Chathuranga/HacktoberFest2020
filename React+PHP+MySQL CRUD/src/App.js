import React from 'react';

import {BrowserRouter, Switch , Route} from 'react-router-dom';


import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';




function App() {
  return ( 

  <div>
    <BrowserRouter>
    <Navbar />
   
    <Switch>

    <Route path="/register">
      <Register />
    </Route>

    <Route path="/login">
      <Login />
    </Route>
   
    <Route path="/">
      <Home />
    </Route>
    </Switch>

    
 
    

    </BrowserRouter>
    
    

     
   
    
   

    </div>
 
  );
  
  
}

export default App;
