import './css/menuList.css'
import { FaHome } from "react-icons/fa";
import {createBrowserRouter,Route,  NavLink , Link } from "react-router-dom";

function MenuList() {
  return (
    <div className="listGroup">
      <button>
        <FaHome/> 
        Dashboard 
    </button>
    <button>
        <FaHome/> 
        Dashboard 
    </button>
    <button>
        <FaHome/> 
        Dashboard 
    </button>
    
    </div>
  )
}

export default MenuList
