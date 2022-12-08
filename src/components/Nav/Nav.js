import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        
      <nav className="nav">
         <ul>
            <li>
        <Link to="/" >
          Search
        </Link>
        </li>

        
        <li>
          <Link to="/favorites" >
          Favorites
        </Link>
        </li>
        </ul>
      </nav>
    )
  }