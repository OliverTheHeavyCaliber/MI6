import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className="mission-menu top-menu">

            <Link to="/missions">List of missions</Link>

            <Link to="/missions/create">Create a mission</Link>

        </nav>
    )
}