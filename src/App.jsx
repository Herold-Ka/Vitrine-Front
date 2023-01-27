import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Join from './pages/Join'
import Forum from './pages/Forum'
import SignIn from './pages/SignIn'
import Panel from './pages/Panel'
import LicenceFree from './pages/LicenceFree'
import Artiste from './pages/Artiste'
import Popular from './pages/Popular'
import './assets/css/variable.css'

function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Join' element={<Join/>}/>
        <Route path='LicenceFree' element={<LicenceFree/>}/>
        <Route path='Artiste' element={<Artiste/>}/>
        <Route path='Popular' element={<Popular/>}/>
        <Route path='Forum' element={<Forum/>}/>
        <Route path='Panel' element={<Panel/>}/>
        <Route path='SignIn' element={<SignIn/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
