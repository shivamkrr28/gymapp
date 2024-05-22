import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <>
          <Link to="">Home</Link> |  
          <Link to="task">Task</Link> |         
          <Link to="users">Users</Link> |
          <Link to="categories">Categories</Link> 
                   
        </>        
    );

}