import React from 'react'

import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { history } from '../../_helpers/history';
import { Nav } from '../../components/Nav';
import { PrivateRoute } from '../../components/PrivateRoute';
import { Home } from '../../home/Home';
/* import { Login } from 'login'; */
import Login1 from './Login1'

/* import Aside2 from '../../components/Aside2'; */


export default function Indexlogin() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    history.navigate = useNavigate();
    history.location = useLocation();

    return (
        <div className="app-container bg-light">
            <Nav />
            <div className="container pt-4 pb-4">
                <Routes>
                <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<Login1 />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>
    );
  
}
/*   return (
    <main className='home'> 
  
    <Aside2 />
    <Login />
   
 
  </main>
  ) */

