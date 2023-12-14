import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

const UserContext = ({children}) => {

    const[userAuth, setUserAuth] = useState({
        user:null,
        token:''
    });

    useEffect(()=>{
        const data = localStorage.getItem('auth');
        if(data){
            const parseData = JSON.parse(data);
            setUserAuth({...useAuth, user:parseData.user, token:parseData.token})
        }
    },[])

  return (
    <div>
        <AuthContext.Provider value={[userAuth, setUserAuth]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

const useAuth =()=>useContext(AuthContext);

export {useAuth, UserContext}