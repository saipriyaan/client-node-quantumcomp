import React from 'react';
import { Link } from 'react-router-dom';


function Navigation(){
    return (
        <nav className="StoreApp-nav">
            
            <div><Link to="/"> Home Page </Link>
            <Link to="/create-exercise">Create Exercise</Link>
            </div>
            
        
        </nav>
    );
}
export default Navigation;