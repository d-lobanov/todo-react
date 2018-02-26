import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import todoApp from "./redusers";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./containers/HomePage";
import TodoEditPage from "./components/TodoEditPage";
import "./index.css";

const store = createStore(todoApp);

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/todo/:id" component={TodoEditPage}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
