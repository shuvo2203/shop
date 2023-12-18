import React from 'react'
import { useAuth } from '../../UserContext';
import './admin.css';
import AdminMenu from '../../components/adminMenu/AdminMenu';

const Admin = () => {

    const [userAuth, setUserAuth] = useAuth();

    return (
        <>
            <div className='container'>
                <div className='row py-5'>
                    <div className='col-md-3'>
                        <h4 className='py-3'>Admin Menu</h4>
                        <div className='dashboard'>
                            <AdminMenu />
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <h4 className='py-3'>Admin Details</h4>
                        <div className='userdetail'>
                            <h5><span>Name</span> : {userAuth?.user?.name}</h5>
                            <h5><span>Email</span> : {userAuth?.user?.email}</h5>
                            <h5><span>Role</span> : {userAuth?.user?.role}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;