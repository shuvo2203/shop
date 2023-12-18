import React, { useEffect, useState } from 'react';
import './editUser.css';
import { useAuth } from '../../UserContext';
import axios from 'axios';

const EditUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [userAuth, setUserAuth] = useAuth();

    useEffect(() => {
        const { name, email } = userAuth.user;
        setName(name)
        setEmail(email)
    }, [userAuth?.user]);

    const handleSubmit=async(id)=>{
        // e.preventDefault();
        const{data} = await axios.put(`http://localhost:5000/api/v1/update/${id}`,{
            name,email
        });
        console.log(data)
    }

    return (
        <>
            <h1 className='text-center py-5'>Edit User</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 mx-auto'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                /><br />
                                <input
                                    type='text'
                                    className='form-control'
                                    value={email}
                                    disabled
                                /><br />
                            </div>
                            <button className='btn btn-info btn-block'>Update User</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditUser;