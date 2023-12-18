import React from 'react';
import './userMenu.css';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  return (
    <>
        <div className='list'>
            <Link to='/dashboard/user/orders' >Orders</Link>
            <Link to='/dashboard/user/edit' >Edit Profile</Link>
        </div>
    </>
  )
}

export default UserMenu