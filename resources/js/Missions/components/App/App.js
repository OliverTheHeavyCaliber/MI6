// resources/js/Mission/componets/App/App.js
import {useEffect} from "react";

import Menu from '../Menu/Menu';
import MissionList from '../MissionList/MissionList';
import MissionEditForm from '../MissionEditForm/MissionEditForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login';
import axios from 'axios';

export default function App() {

    useEffect(() => {
        console.log('application started');

        getUserData();
    }, [])

    const getUserData = async () => {
        const resp = await axios.get('/api/user')

        console.log(resp);
    }

    const logout = async () => {
        const resp = await axios.post('/logout');

        console.log(resp);
    }

    return (
        <BrowserRouter>
            <div className="missions">
                <Menu />
                <h1>Hello</h1>
                <div className="missions__content">

                    <Routes>
                        <Route path="/missions" element={ <MissionList /> } />
                        <Route path="/missions/create" element={ <MissionEditForm /> } />
                    </Routes>

                    <Register/>
                    <Login/>

                    <button onClick={logout}>Logout</button>
                </div>
            </div>

        </BrowserRouter>
    )
}
