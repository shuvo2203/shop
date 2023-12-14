import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();

    const register=async(e)=>{
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/v1/adduser',{
            name, email, password
        });
        if(response.status === 200){
            alert('Registration Successfull');
            navigate('/login');
        }else{
            alert('Registration Failed');
        }
    }

  return (
    <>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-4 mx-auto'>
                    <form onSubmit={register}>
                        <h3 className='text-center py-5'>Registration Form</h3>
                        <div>
                            <input 
                                type='text' 
                                placeholder='Name' 
                                className='form-control'
                                onChange={(e)=> setName(e.target.value)}
                            />
                        </div><br/>
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
                        <button className='btn btn-primary btn-block'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register