import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './Profile.css';
import Navbar from './Navbar'
import Login from './Login'
import Register from './Register'
import ProfilePage from '../screens/ProfilePage/profilePage'
// import Search Bar Component
import HorizontalLinearStepper from "./SearchBar";
// import Tags from './Tags';
import Edit from './Edit';

// import Test from './Test';


const App = () => {
    // data();
    return (
      <Router>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/profile">Profile</Link> */}
        <Navbar />
        <Switch>
        
          <Route path="/profile">
            <ProfilePage />
            {/* <Tags /> */}
          </Route>

          <Route path='/' exact>
            <h1>Welcome to Teamder's</h1>
            <Edit />
            <HorizontalLinearStepper/>
          </Route>

          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          {/* <Route path="/getalldata" exact component={Test} /> */}

        </Switch>
      </Router>
    );
}

export default App;
