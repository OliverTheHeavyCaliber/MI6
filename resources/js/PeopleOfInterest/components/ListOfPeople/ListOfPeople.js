import { useEffect, useState } from "react"
import { get } from '../../../util/request';

export default function ListOfPeople() {

    const [searchTerm, setSearchTerm] = useState('');
    const [people, setPeople] = useState([]);

    const loadPeopleData = async () => {
        const url = '/api/person/search?search=' + encodeURIComponent(searchTerm);

        // use our predefined get function
        // to make a GET http request
        // get an axios response object
        const response = await get(url);

        // use the .data property of the axios response object
        // to set the people
        setPeople(response.data.data);
    }

    // run loadPeopleData on change of the searchTerm
    useEffect(() => {
        loadPeopleData();
    }, [searchTerm]);

    return (
        <div className="list-of-people">

            <h1 className="list-of-people__headline">People of interest</h1>

            <div className="list-of-people__search">
                <label>Search:</label><br />
                <input
                    type="text"
                    className="list-of-people__search-input"
                    onChange={ event => setSearchTerm(event.target.value) }
                />
            </div>

            <ul className="list-of-people__list">

                {
                    people.map(person => (
                        <li className="list-of-people__person">
                            <img className="image" src={ `/images/${person.image_path}` } alt="mugshot" />
                            <div className="info">
                                <div className="name">{ person.name }</div>
                                <div className="occupation">{ person.occupation }</div>
                                <div className="status-text">{ person.status_text }</div>
                            </div>
                        </li>
                    ))
                }

            </ul>

        </div>
    )

}