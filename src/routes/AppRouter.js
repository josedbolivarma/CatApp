import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import DashboardRoutes from './DashboardRoutes'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
        if(user?.uid){
          setIsLoggedIn(true);
        }
        else{
            setIsLoggedIn(false)
        }
        setChecking(false)
    })

  
 }, [setIsLoggedIn, setChecking]);

  
  if(checking) {
    return (
      <div style={{
        position: 'absolute',
        backgroundColor: '#FFF',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
      }}>
        <div 
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
        <img width='200px' height='100px' src='https://cdn4.iconfinder.com/data/icons/animals-57/500/cat_animal_-512.png' alt='Loader'/>
        </div>
      </div>
    )
  }
  return (
    <BrowserRouter>
    <Routes>
        <Route 
        path='/login'
        element={
            <PublicRoutes isAuth={isLoggedIn}>
                <Login />
            </PublicRoutes>
        }
        />

    <Route path='/register' element={
              <PublicRoutes isAuth={isLoggedIn}>
                  <Register />
              </PublicRoutes>
            }/>

    <Route path='/*' element={
              <PrivateRoutes isAuth={isLoggedIn}>
                  <DashboardRoutes />
              </PrivateRoutes>
            }/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter