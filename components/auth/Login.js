import React,{Fragment, useState} from 'react'
import {Link} from "react-router-dom"
const Login = () => {
    const [formData, setformData] = useState({
        email:"",
        password: ""
    })

    const {email,password}= formData;

    const onChange=(e)=>{
        setformData({...formData,[e.target.name]:e.target.value});
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        //login action call
    }

     //redirect if logged in
//   if (isAuthenticated) {
//     return <Redirect to='/dashboard' />;
//   }

    return (
        <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Sign In</h1>
        <p className='lead'>
          <i className='fas fa-user'></i>Enter your Credentials
        </p>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <input type='submit' className='btn btn-success' value='Login' />
        </form>
        <p className='my-1'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </section>
    </Fragment>
        
    )
}

export default Login
