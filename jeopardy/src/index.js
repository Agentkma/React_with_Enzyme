import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import rootReducer from "./reducers";
import "./index.css";
import App from "./component/App";
import registerServiceWorker from "./registerServiceWorker";
import Category from "./component/Category";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/category" component={Category} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
