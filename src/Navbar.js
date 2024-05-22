import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from "./Menu.js";
import UsersList from './UsersList.js';
import Task from "./Task.js";

export default function Navbar(){
   
    function getAlert(){
        alert("working...");
    }
    return(
      <BrowserRouter>
          <Menu />
          <Routes>
          <Route path='' element="" />   
            <Route path='/task' element={<Task param={getAlert} />} />              
            <Route path='/users' element={<UsersList />} />            
            <Route path='/categories' element="" />   
          </Routes>
      </BrowserRouter>          
    );

}