import React from 'react'
import {Link} from 'react-router-dom'
const Landing = () => {
    return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large welcome-msg'>welcome to AutOnline</h1>
          <p className='lead'>
            Pakistan's first online spare parts marketplace!
          </p>
          {/* <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>

            <Link to='/login' className='btn btn-pink'>
              Login
            </Link>
          </div> */}
          <div>
          <Link to="/dashboard" className="btn btn-light btn-big btn-block">
            explore market
          </Link> 
          </div>
        </div>
      </div>
    </section>
    )
}

export default Landing
