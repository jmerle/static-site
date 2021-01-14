import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/base.css';
import HomePage from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;