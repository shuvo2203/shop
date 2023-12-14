import React from 'react'
import { useAuth } from '../../UserContext';

const Home = () => {

  const[userAuth, setUserAuth] = useAuth();

  return (
    <div>
      {JSON.stringify(userAuth,null,4)}
    </div>
  )
}

export default Home