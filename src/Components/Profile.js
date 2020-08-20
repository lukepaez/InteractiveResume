import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import '../Style/Profile.css';
function Profile() {
return (
    <div className='profile-container'>
    <Nav/>
    <div className='profile-content'>
        <div className='profile-page-content'>
            <h1>Full Stack Software Developer</h1>
            <hr className='title-divider'/>
            <div className='profile-aboutme-container'>
                <div className='profile-details'>
                    <h3>Details</h3>
                    <h5>Name:</h5>
                    <p>Luke Paez</p>
                    <h5>Age:</h5>
                    <p>22</p>
                    <h5>Location:</h5>
                    <p>Charlotte, NC</p>
                </div>
                <div className='profile-about'>
                    <h3>About Me</h3>
                    <p>I'm a fullstack software developer with good knowledge of
                    both front and back-end techniques and technologies. I pride 
                    myself in being self aware and focused while always looking
                    at the finer details. I am teamwork oriented but can also
                    succeed in solving practical problems individually. My analytical
                    mind paired with extensive technical knowledge is what drives
                    my interest for software development. My hobbies include: 
                    investing/quantitative work, pyshical fitness, golf, and boating.
                    </p>
                </div>
            </div>
        </div>
        <div className='profile-page-content2'>
            <h2 id='profile-h1'>Experience</h2>
            <hr className='title-divider'/>
            <div className='profile-education'>
                <div className='profile-education-content'>
                    <div className='profile-education-content-header'>
                        <h3>Education</h3>
                        <div>Clemson University</div>
                        <div>August 2015 - May 2019</div>
                    </div>
                    <div className='profile-education-content-info'>
                        <h5>Bachelor's Degree - Computer Science (B.S.)</h5>
                    </div>
                </div>
            </div>
            <hr className='content-divider'/>
            <div className='profile-career'>
                <div className='profile-career-content'>
                    <div className='profile-career-content-header'>
                        <h3>Career</h3>
                        <div>Ally Financial</div>
                        <div>July 2019 - Current</div>
                    </div>
                    <div className='profile-career-content-info'>
                        <h5>Fulltime - Software Developer</h5>
                    </div>
                </div>
            </div>
            <hr className='content-divider-career'/>
            <div className='profile-career'>
                <div className='profile-career-content'>
                    <div className='profile-career-content-header'>
                        <div>eSecurity Solutions</div>
                        <div>May 2016 - Aug 2018</div>
                    </div>
                    <div className='profile-career-content-info2'>
                        <h5>Fulltime - Automation Developer</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</div>
);
}

export default Profile;