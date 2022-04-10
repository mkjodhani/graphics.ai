import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import EditorComponent from '../pages/editor'
import Home from '../pages/Home'
export default function _Routes() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/editor' element={<EditorComponent/>}/>
        </Routes>
      </BrowserRouter>
  )
}
