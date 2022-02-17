import axios from 'axios';
import { useEffect, useState, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import UserContext from './UserContext';
import LeftPanel from "../LeftPanel/LeftPanel";
import MainContent from "../MainContent/MainContent";

export default function App() {

    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);

    const loadUser = async () => {
        // fetch information about the logged-in user from the API
        const response_object = await axios.get('/api/user');

        const user = response_object.data.user;

        // set that information into this component's user state
        setUser(user);

        if (user) {
            setAuthenticated(true);
        }
    }

    useEffect(() => {
        loadUser();
    }, []); // [] == don't wait for any changes, run this when the component is first mounted

    useEffect(() => {
        loadUser();
    }, [authenticated]); // run this function whenever the value of authenticated changes

console.log(user);
    return (
        <UserContext.Provider value={ user }>

            <BrowserRouter>

                <LeftPanel setAuthenticated={ setAuthenticated } />

                {/* App component sends the method setAuthenticated to MainContent as prop */}
                <MainContent setAuthenticated={ setAuthenticated } />

            </BrowserRouter>

        </UserContext.Provider>
    )
}