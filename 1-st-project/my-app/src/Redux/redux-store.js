import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import musicReducer from "./music-reducer";
import profileReducer from "./profile-reducer";
import settingsReducer from "./settings-reducer";
import userSearchReducer from "./userSearch-reducer";


let redusers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    musicPage: musicReducer,
    newsPage: musicReducer,
    settingsPage: settingsReducer,
    userSearchPage: userSearchReducer,
    auth: authReducer,
});

let store = createStore(redusers, applyMiddleware(thunk));
window.store = store;
export default store;
