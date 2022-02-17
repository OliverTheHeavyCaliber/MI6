import { useContext } from 'react';
import { Route, Routes, Redirect } from 'react-router';
import Homepage from '../Homepage/Homepage';
import ListOfPeople from '../ListOfPeople/ListOfPeople';
import LoginForm from '../LoginForm/LoginForm';
import PersonDetail from '../PersonDetail/PersonDetail';
import UserContext from '../App/UserContext';

export default function MainContent({ setAuthenticated }) {

    const user = useContext(UserContext);

    return (
        <div className="main__content">

            <Routes>

                {
                    user === null
                          // MainContent sends setAuthenticated (that it got from App) to LoginForm as a prop
                        ?   <>
                                <Route exact path="/agent/login" element={ <LoginForm setAuthenticated={ setAuthenticated } /> } />

                                {/* <Redirect from="*" to="/agent/login" /> */}
                            </>
                        : (
                            <>
                                <Route exact path="/agent" element={ <Homepage user={ user } /> } />

                                <Route exact path="/agent/people-of-interest" element={ <ListOfPeople /> } />

                                <Route path="/agent/person" element={ <PersonDetail /> } />
                            </>
                        )
                }

            </Routes>

        </div>
    )
}