import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../auth/Login'
import EditorComponent from '../pages/editor'
import Home from '../pages/home/Home'
export default function _Routes() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/editor' element={<EditorComponent/>}/>
        </Routes>
      </BrowserRouter>
  )
}
