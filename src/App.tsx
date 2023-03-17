import React, {useContext} from 'react'
import Inside from './pages/Inside'
import { AuthContext } from './Contexts/AuthContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'
import { RequireAuth } from './Contexts/RequireAuth'


export default () => {
  const auth = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Signin/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/home' element={<RequireAuth><Inside/></RequireAuth>}/>
      </Routes>
    </BrowserRouter>
  )
}
