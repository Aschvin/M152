import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Router, Switch, Route} from "react-router-dom";
import Impressum from "./components/Impressum";
import history from './components/History'

ReactDOM.render(
  <React.StrictMode>
      <Router history={history}>
          <Switch>
              <Route path={"/impressum"} exact component={Impressum} />
              <Route path="/" component={App} />
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
