import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import createStore from "redux/src/createStore";
import combineReducers from "redux/src/combineReducers";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;