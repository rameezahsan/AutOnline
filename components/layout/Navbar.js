import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
    <nav className="navbar bg-bluish">
    <h1>
        <Link to="/"> <i className="fas fa-car"></i> AutOnline</Link>
    </h1>

    <ul>
      <li>
        <Link to='/register'><i className="fas fa-user-plus"></i> Register</Link>
      </li>
      <li>
        <Link to='/login'><i className="fa fa-sign-in"></i> Login</Link>
      </li>
      
    </ul>
    </nav>
    )
}

export default Navbar
