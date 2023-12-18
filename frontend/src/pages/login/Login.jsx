import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../UserContext';

const Login = () => {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[userAuth, setUserAuth] = useAuth();

  const navigate = useNavigate();

  const login=async(e)=>{
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/v1/login',{
      email, password
    });
    if(response.status === 200){
      setUserAuth({...userAuth, user:response.data.user, token:response.data.token});
      localStorage.setItem('auth', JSON.stringify(response.data));
      navigate('/')
    }else{
      alert('Invalid Login Details');
    }
  }

  return (
    <>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-md-4 mx-auto'>
            <form onSubmit={login}>
              <h3 className='text-center py-5'>Login Form</h3>
              <div>
                <input 
                  type='text'
                  placeholder='Email'
                  className='form-control'
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div><br/>
              <div>
                <input 
                  type='password'
                  placeholder='Password'
                  className='form-control'
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </div><br/>
              <button className='btn btn-primary btn-block'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login