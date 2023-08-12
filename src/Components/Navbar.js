import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css"


const Navbar = () => {
 
    const navigate = useNavigate();

   
  
    const handleHomeClick = () => {
      navigate('/');
    }
  
    const handleDepartments =()=>{
      navigate('/departments');
    }
  
    const handleProducts =()=>{
      navigate('/products');
    }
  
    return (
      <div className="sidenav">
        
  
        <div className="sidenav__buttons">
          <button className="sidenav__button" onClick={handleHomeClick}>
            
            <span>Dashboard</span>
          </button>
        
          <button className="sidenav__button" onClick={handleDepartments}>
        
            <span>Depaartments</span>
          </button>
  
     
          <button className="sidenav__button" onClick={handleProducts}>
          
            <span>Productt</span>
          </button>
  
          
        </div>
      </div>
    );
}

export default Navbar