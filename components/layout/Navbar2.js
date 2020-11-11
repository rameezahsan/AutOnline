import React from 'react'
import {Link} from 'react-router-dom'
const Navbar2 = () => {
    return (
    <nav className="navbar2 bg-pink">
    <h1>
        <Link to="/"></Link>
    </h1>

    <ul>
    <li>
        <Link to="/oils">Oils</Link>
      </li>
      <li>
        <Link to="/filters">Filters</Link>
      </li>
      <li>
        <Link to="/lights">Lights</Link>
      </li>
      <li>
        <Link to="/engines">Engines</Link>
      </li>
      <li>
        <Link to="/brakes">Brakes</Link>
      </li>
    </ul>
    </nav>
    )
}

export default Navbar2
