import React from 'react';
import Nav from '../Components/Nav';
import Footer from './Footer';
import Logo1 from '../Static/integration.jpeg';
import Logo2 from '../Static/Invoicify.png';
import Logo3 from '../Static/gdi.png';
import Logo4 from '../Static/metube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import '../Style/Projects.css';
import { Link } from 'react-router-dom';

function App() {
return (
    <div className='projects-container'>
    <Nav/>
    <div className='projects-content'>
        <h1>My Work</h1>
        <div className='project-strip-container'>
            <div className='project-strip-header'>
                <div className='header-content'>
                    <FontAwesomeIcon icon={faEdit} size='6x'/>
                    <p>Here is a short list selection of some recent work.
                    For a more up to date work or general information, please reach out through my
                    <Link to='/Contact'> Contact </Link>
                    page.
                    </p>
                </div>

            </div>
            <div className='project-strip'>
                <div className='project-strip-content'>
                    <img src={Logo1} alt='integration'></img>
                    <h2>Integration Bus</h2>
                    <h5>REST API/Backend Service</h5>
                    <p>Backend REST service providing API enabled routing
                    to all existing account holders of Ally Financial
                    for Deposits/Deposit Operations.
                    </p>
                </div>
            </div>
            <div className='project-strip2'>
                <div className='project-strip-content'>
                    <img src={Logo2} alt='integration'></img>
                    <h2>Invoicify</h2>
                    <h5>Full Stack Web Application</h5>
                    <p>Web Application built using the Sprint-Boot framework,
                    Angular, and PostgreSQL.
                    </p>
                </div>
            </div>
            <div className='project-strip3'>
                <div className='project-strip-content'>
                    <img src={Logo3} alt='integration'></img>
                    <h2>Good Driver Incentive Program</h2>
                    <h5>Full Stack Web Application</h5>
                    <p>Web Application built using JSP/HTML5/Amazon RDS.
                    Hosted on Amazone Web Services (AWS).
                    </p>
                </div>
            </div>
            <div className='project-strip4'>
                <div className='project-strip-content'>
                    <img src={Logo4} alt='integration'></img>
                    <h2>MeTube</h2>
                    <h5>Web Application</h5>
                    <p>Multimedia web application built with PHP,
                        and MySQL.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
);
}

export default App;