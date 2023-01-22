import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Registrarse from './Pages/Registrarse'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/registrar' element={<Registrarse />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
