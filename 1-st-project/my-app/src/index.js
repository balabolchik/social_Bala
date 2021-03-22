import reportWebVitals from "./reportWebVitals";
import store from "./Redux/redux-store";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "./index.css";
import { Provider } from "react-redux"
import App from "./App";


setInterval(() => {
    store.dispatch({type:'FAKE'});
}, 1000);


ReactDOM.render(
        <BrowserRouter>
        
                <Provider store={store}>
                    <App isAuth={store.getState().auth.isAuth}/>
                </Provider>
        </BrowserRouter>,
        document.getElementById("root")
    );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
