import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../UserContext';
import axios from 'axios';

const Navbar = () => {

    const[userAuth, setUserAuth] = useAuth();

    const logout=async()=>{
        await axios.get('http://localhost:5000/api/v1/logout');
        setUserAuth({...userAuth, user:null, token:''})
        localStorage.removeItem('auth')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">FullShop</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {
                            userAuth?.user ? (
                                <>
                                    <li className="nav-item">
                            <Link className="nav-link" to={`/dashboard/${userAuth.user.role === "admin" ? 'admin':'user'}`}>Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" onClick={logout}>Logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                                </>
                            ) : (
                                <>
                                     <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;