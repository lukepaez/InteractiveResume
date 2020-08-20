import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Home.css';
import Nav from './Nav';
import Footer from './Footer';


function Home() {
return (
<div className='home-container'>
    <Nav/>
    <div className='home-content'>
        <div className='container'>
            <div>Luke Anthony Paez</div>
            <hr/> 
            <div className='btn'>
                <Button variant='dark' href='/Profile'>Learn More</Button>
            </div>  
        </div>

    </div>
    <Footer/>
</div>

);
}
export default Home;