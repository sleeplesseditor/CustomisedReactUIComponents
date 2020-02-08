import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LazyLoader from './components/Spinner/LazyLoader';
import Header from './components/Header/Header';
import './App.scss';

const DatePickerPage = React.lazy(() => import('./pages/DatePickerPage'));
const UpdatedDatePickerPage = React.lazy(() => import('./pages/DatePickerUpdatePage'));
const OrientationButtonPage = React.lazy(() => import('./pages/OrientationButtonPage'));
const JSONFormPage = React.lazy(() => import('./pages/JSONFormPage'));
const InfiniteScrollPage = React.lazy(() => import('./pages/InfiniteScrollPage'));
const ProgressCirclePage = React.lazy(() => import('./pages/ProgressCirclePage'));
const BackgroundVideoPage = React.lazy(() => import('./pages/BackgroundVideoPage'));
const BrowserDetectionPage = React.lazy(() => import('./pages/BrowserDetectionPage'));
const CollapsibleContentPage = React.lazy(() => import('./pages/CollapsibleContentPage'));
const StickyPropertiesPage = React.lazy(() => import('./pages/StickyPropertiesPage'));

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={LazyLoader(DatePickerPage)} />
          <Route exact path="/updated-date-picker" component={LazyLoader(UpdatedDatePickerPage)} />
          <Route exact path="/orientation" component={LazyLoader(OrientationButtonPage)} />
          <Route exact path="/json-form" component={LazyLoader(JSONFormPage)} />
          <Route exact path="/infinite-scroll" component={LazyLoader(InfiniteScrollPage)} />
          <Route exact path="/progress-circle" component={LazyLoader(ProgressCirclePage)} />
          <Route exact path="/background-video" component={LazyLoader(BackgroundVideoPage)} />
          <Route exact path="/browser-detection" component={LazyLoader(BrowserDetectionPage)} />
          <Route exact path="/collapsible-content" component={LazyLoader(CollapsibleContentPage)} />
          <Route exact path="/sticky-properties" component={LazyLoader(StickyPropertiesPage)} />
        </Switch>
    </Router>
  );
}

export default App;
