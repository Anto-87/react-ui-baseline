import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Login from '../login/Login';
import TopBar from '../topbar/TopBar';


export default function Defn() {
  return (
        
        <Routes>
            <Route path ="/" element={<Login/>}/>
            <Route path ="/dashboard" element={<Dashboard/>}/>      
            <Route path="/topBar" element={<TopBar />}/>
        </Routes>
  );
}
