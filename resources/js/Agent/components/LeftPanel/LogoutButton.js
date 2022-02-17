import { useContext } from 'react';
import UserContext from '../App/UserContext';

export default function LogoutButton() {

    const user = useContext(UserContext);

    const handleLogout = async event => {
        event.preventDefault();

        let response = await axios.post('/logout');

        if (response.status === 204) {
            setAuthenticated(false);
        }

    }

    return (
        <div className="logged-in-user">
            <div className="logged-in-user__name">You are logged in as: { user.name }</div>
            <button onClick={ handleLogout }>Logout</button>
        </div>
    )
}