import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


import {UserStorage} from './UserContext'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import User from './Components/Account/User'
import Photo from './Components/Photo/Photo'


import './App.css'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import UserProfile from './Components/Account/UserProfile'
import NotFound from './Components/NotFound'



const App = () => {


  return (
    <div className='App'>
    
      <BrowserRouter>

        <UserStorage>
          <Header/>
          <main className='AppBody'>

          <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/login/*' element={ <Login/>}/>
            <ProtectedRoute path='/conta/*' element={ <User/>}/>
            <Route path='/foto/:id' element={ <Photo/>}/>
            <Route path='/perfil/:user' element={ <UserProfile/>}/>
            <Route path='*' element={ <NotFound/>}/>
          </Routes>


          </main>



          <Footer/>
        </UserStorage>
        

      </BrowserRouter>





    </div>
    
  );
   
   
}

export default App;
