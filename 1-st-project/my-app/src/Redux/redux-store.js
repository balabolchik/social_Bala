import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import musicReducer from "./music-reducer";
import profileReducer from "./profile-reducer";
import settingsReducer from "./settings-reducer";
import userSearchReducer from "./userSearch-reducer";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";


let redusers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    musicPage: musicReducer,
    newsPage: musicReducer,
    settingsPage: settingsReducer,
    userSearchPage: userSearchReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

let store = createStore(redusers, applyMiddleware(thunk));
window.store = store;
export default store;
