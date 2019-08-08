import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import DatePickerPage from './pages/DatePickerPage';
import UpdatedDatePickerPage from './pages/DatePickerUpdatePage';
import OrientationButtonPage from './pages/OrientationButtonPage';
import JSONFormPage from './pages/JSONFormPage';
import InfiniteScrollPage from './pages/InfiniteScrollPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={DatePickerPage} />
          <Route exact path="/updated-date-picker" component={UpdatedDatePickerPage} />
          <Route exact path="/orientation" component={OrientationButtonPage} />
          <Route exact path="/json-form" component={JSONFormPage} />
          <Route exact path="/infinite-scroll" component={InfiniteScrollPage} />
        </Switch>
    </Router>
  );
}

export default App;
