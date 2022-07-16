import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import Home from '../pages/Home';
import Base from '../components/Base';

// import { Container } from './styles';

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route path="/" element={<Base><Home /></Base>} />
            <Route path='/about' element={<Home />} />
        </Switch>
    </Router>);
}

export default Routes;