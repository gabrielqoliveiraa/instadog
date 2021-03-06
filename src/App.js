import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


import {UserStorage} from './UserContext'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import User from './Components/Account/User'


import './App.css'
import ProtectedRoute from './Components/Helper/ProtectedRoute'



const App = () => {


  return (
    <div>
    
      <BrowserRouter>

        <UserStorage>
          <Header/>
          <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/login/*' element={ <Login/>}/>
            <ProtectedRoute path='/conta/*' element={ <User/>}/>

          </Routes>
          <Footer/>
        </UserStorage>
        

      </BrowserRouter>





    </div>
    
  );
   
   
}

export default App;
