import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import rootReducer from "./reducers";
import App from "./components/App";
import Stack from "./components/Stack";
import StackForm from "./components/StackForm";
import registerServiceWorker from "./registerServiceWorker";
import { setStack } from "./actions";

const store = createStore(rootReducer);
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(setStack({ id: 0, title: "example", cards: [] }));
console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/stack" component={Stack} />
                <Route path="/stack_form" component={StackForm} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
