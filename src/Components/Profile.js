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
            <h1 id='profile-h2'>Experience</h1>
            <hr className='title-divider'/>
            <h3 id='experience-h3'>Education</h3>
            <div className='experience-content-container'>
                <div id='experience-header'>
                    <h5>Clemson University</h5>
                    <div>Aug 2015 - May 2019</div>
                </div>
                <div id='experience-description'>
                    <h5>Computer Science (B.S.)</h5>
                    <h5>Selected Coursework</h5>
                    <ul>
                        <li>Algorithms and Data Structures</li>
                        <li>Software Development</li>
                        <li>Software Engineering</li>
                        <li>Networks and Network Programming</li>
                    </ul>
                </div>
            </div>
            <hr/>

            <h3 id='experience-h3'>Career</h3>
            <div className='experience-content-container'>
                <div id='experience-header'>
                    <h5>Ally Financial</h5>
                    <div>July 2019 - Current</div>
                </div>
                <div id='experience-description'>
                    <h5>Software Developer</h5>
                    <h5>Job Description:</h5>
                    <ul>
                        <li>Researching, designing, implementing, and managing .NET applications written in C#</li>
                        <li>C# applications paired with Pegasystems (RPA tool) for data scraping on Ally customer deposits accounts</li>
                        <li>Working with additional technologies such as Python, Selenium - Flask - Jinja, GoLang, JavaScript, SQL, Postman, JIRA, Bitbucket</li>
                        <li>Using Python with Flask and SQLite for application logs parsing and analytics dashboard. Paired with HTML5, Javascript, and Jinja for 
                            the analytics dashboard</li>
                        <li>Worked with GoLang briefly to rewrite our application logging service</li>
                        <li>Write scripts using various scripting languages such as Powershell and Batch</li>
                        <li>Using JIRA, Bitbucket, and Jenkins for the agile software development process, and DevOps</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className='experience-content-container'>
                <div id='experience-header'>
                    <h5>eSecurity Solutions</h5>
                    <div>Sep 2014 - Aug 2018</div>
                </div>
                <div id='experience-description'>
                    <h5>Automation Engineer</h5>
                    <h5>Job Description:</h5>
                    <ul>
                        <li>ConnectWise Automate Development. Maintaining and building Monitors/Alerts and Scripts to provide a proactive automated response to 
                            endpoints over the network using ConnectWise</li>
                        <li>Worked with Powershell, Cisco network switches, and virtualization</li>
                        <li>Oversee monthly/quarterly performance of computer systems</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</div>
);
}

export default Profile;