import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import routes from './routes/routes';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.map((route: RouteProps) => (
            <Route key={`routes-${route.location}`} {...route} />
          ))}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
