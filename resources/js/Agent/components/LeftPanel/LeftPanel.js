import axios from 'axios';
import { useContext } from 'react';
import UserContext from '../App/UserContext';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

export default function LeftPanel({ setAuthenticated }) {

    const user = useContext(UserContext);

    return (
        <div className="left-panel left-panel--agent">

            <div className="left-panel__seal">
                <img src="/img/mi6-seal.png" alt="MI6 seal" />
            </div>

            <div className="left-panel__navigation">

                <a className="left-panel__link" href="/">Home</a>

                <Link to="/agent/people-of-interest" className="left-panel__link">People of interest</Link>

                <Link to="/agent/person" className="left-panel__link">One person</Link>

                <Link to="/agent" className="left-panel__link">Agent access</Link>

                {
                    user ? (
                        <LogoutButton />
                    ) : ''
                }


            </div>

        </div>
    )
}