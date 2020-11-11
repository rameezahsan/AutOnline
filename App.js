import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Navbar2 from './components/layout/Navbar2';
import Dashboard from './components/dashboard/Dashboard';


const App=() =>{
  return (
    <Router> 
    {/* fragment is used below in place of div. as div when returned sometimes causes format errors */}
    <Fragment>
     <Navbar/>
     <Navbar2/>
     <Route exact path="/" component={Landing}/>
     
     <section className="container"> 
     {/*Switch is actually used to handle privateRoutes */}
     <Switch> 
     <Route exact path="/register" component={Register}/>
     <Route exact path="/login" component={Login}/>
     <Route exact path="/dashboard" component={Dashboard}/>
     </Switch>
     </section>
    </Fragment>
    </Router>
  );
}

export default App;
