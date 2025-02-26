import React,{useState,Fragment} from 'react'
import {Link} from 'react-router-dom'
const Register = () => {

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        password2:""
    });

    const {name, email,password,password2} =formData;

    const onChange=(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value});
    }
    const onSubmit=async (e)=>{
        e.preventDefault();
        if(password!==password2){
            console.log("password don't match");
            alert("password don't match")
        }
        else{
            // register action successful
            alert("successful! now make the actual action");
        }
    }

    return (
        <Fragment>
        <section className='container'>
          <h1 className='large text-primary'>Sign Up</h1>
          <p className='lead'>
            <i className='fas fa-user'></i> Create Your Account
          </p>

          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
              {/* <small className='form-text'>
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small> */}
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
            <div className='form-group'>
              <input
                type='password'
                placeholder='Confirm Password'
                name='password2'
                minLength='6'
                value={password2}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <input type='submit' className='btn btn-success' value='Register' />
          </form>
          <p className='my-1'>
            Already have an account? <Link to='/login'>Sign In</Link>
          </p>
        </section>
      </Fragment>
    )
}

export default Register
