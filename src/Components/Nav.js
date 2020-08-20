import React from 'react';
import '../Style/Nav.css';
import logo from '../Static/logo.jpeg';
import { Link } from 'react-router-dom';

function App() {
return (
    <div className='nav-container'>
        <div className='nav-bar'>
            <div className='logo-div'>
                <img src={logo} alt='personal'></img>
            </div>
            <div className='temp-div'></div>
            <div className='nav-list'>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/Profile'>Profile</Link>
                    <Link to='/Projects'>Projects</Link>
                    <Link to='/Contact'>Contact</Link>
                </ul>
            </div>
        </div>
    </div>

);
}
export default App;