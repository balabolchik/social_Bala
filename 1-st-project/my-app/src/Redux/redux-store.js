import { combineReducers, createStore } from "redux";
import messagesReducer from "./messages-reducer";
import musicReducer from "./music-reducer";
import profileReducer from "./profile-reducer";
import settingsReducer from "./settings-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    musicPage: musicReducer,
    newsPage: musicReducer,
    settingsPage: settingsReducer
});

let store = createStore(redusers);

export default store;