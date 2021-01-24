import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogContainer from "./components/Dialog/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:usersId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/dialog'
                       render={() => <DialogContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer />}/>

            </div>

        </div>
    );
};

export default App;