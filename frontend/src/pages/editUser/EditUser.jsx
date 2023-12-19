// import React, { useEffect, useState } from 'react';
// import './editUser.css';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import { useAuth } from '../../UserContext';

// const EditUser = () => {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');



//     // const params = useParams();

//     // const[userAuth, setUserAuth] = useAuth();

   

//     // useEffect(() => {
//     //     const[name, email] = userAuth?.user;
//     //     setName(name);
//     //     setEmail(email)
//     //     console.log(name)
//     // }, [userAuth?.user]);

//     // const handleSubmit=async(e)=>{
//     //     return await axios.put(`http://localhost:5000/api/v1/update`,{
//     //         name,email
//     //     })
//     // }

//     return (
//         <>
//             <h1 className='text-center py-5'>Edit User</h1>
//             <div className='container'>
//                 <div className='row'>
//                     <div className='col-md-4 mx-auto'>
//                         <form>
//                             <div>
//                                 <input
//                                     type='text'
//                                     className='form-control'
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                 /><br />
//                                 <input
//                                     type='text'
//                                     className='form-control'
//                                     value={email}
//                                     disabled
//                                 /><br />
//                             </div>
//                             <button className='btn btn-info btn-block'>Update User</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default EditUser;