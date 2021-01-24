import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import createStore from "redux/src/createStore";
import combineReducers from "redux/src/combineReducers";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;
export default store;