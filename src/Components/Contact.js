import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import Nav from '../Components/Nav';
import Footer from './Footer';
import '../Style/Contact.css';

function Contact() {
return (
    <div className='ctnr'>
    <Nav/>
    <div className='contact-content'>
        <h1>Contact</h1>
        <hr id='top'/>
        <div className='contact-container'>
            <div className='contact-email'>
                <FontAwesomeIcon icon={faEnvelope}/>
                <span>lukepaez4@gmail.com</span>
            </div>
            <div className='contact-linkedin'>
                <FontAwesomeIcon icon={faLink}/>
                <a href='https://www.linkedin.com/in/luke-paez/' target='_blank' rel='noopener noreferrer'>
                    https://www.linkedin.com/in/luke-paez/
                </a>
            </div>
            <div className='contact-github'>
                <FontAwesomeIcon icon={faCodeBranch}/>
                <a href='https://www.github.com' target='_blank' rel='noopener noreferrer'>
                    mygithublink
                </a>
            </div>
        </div>
        <hr id='btm'/>
    </div>
    <Footer/>
</div>
);
}

export default Contact;