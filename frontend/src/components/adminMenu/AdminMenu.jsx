import React from 'react';
import './adminMenu.css';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <>
        <div className='list'>
            <Link to='/dashboard/admin/orders' >Orders</Link>
            <Link to='/dashboard/admin/addProduct' >Add Product</Link>
            <Link to='/dashboard/admin/products' >Products</Link>
            <Link to='/dashboard/admin/edit' >Edit Profile</Link>
        </div>
    </>
  )
}

export default AdminMenu