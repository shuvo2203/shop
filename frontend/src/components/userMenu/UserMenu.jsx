import React from 'react';
import './userMenu.css';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../UserContext';


const UserMenu = () => {

  const params = useParams();

  const[userAuth, setUserAuth] = useAuth();

  return (
    <>
        <div className='list'>
            <Link to='/dashboard/user/orders' >Orders</Link>
            <Link to={`/dashboard/user/edit`} >Edit Profile</Link>
        </div>
    </>
  )
}

export default UserMenu