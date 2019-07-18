import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import DatePickerPage from './pages/DatePickerPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={DatePickerPage} />
        </Switch>
    </Router>
  );
}

export default App;
