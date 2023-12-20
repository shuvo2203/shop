import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { useAuth } from './UserContext';
import Admin from './pages/admin/Admin';
import User from './pages/user/User';
import EditUser from './pages/editUser/EditUser';
import AddProduct from './pages/admin/AddProduct';

function App() {

  const[userAuth, setUserAuth] = useAuth();

  return (
   <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path={`/dashboard/${userAuth?.user?.role==="admin"?'admin':'user'}`} element={userAuth?.user?.role === "admin" ? <Admin /> : <User />} />
        {/* <Route path='/dashboard/user/edit' element={<EditUser />} /> */}
        {
          userAuth?.user?.role === "admin" ? <Route path='/dashboard/admin/addproduct' element={<AddProduct />} /> : ''
        }
        
      </Routes>
   </>
  );
}

export default App;
