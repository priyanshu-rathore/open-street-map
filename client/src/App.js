import React from 'react'
import Header from './components/Header/Header'
import "./App.css"
import SideBar from './components/SideBar/SideBar'
import Map from './components/Map/Map'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapMain from './pages/Map/MapMain'
import Table from './pages/Table/Table'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MapMain/>}/>
      <Route path='/table' element={<Table/>}/>
    </Routes>
    </BrowserRouter>
 
  )
}

export default App