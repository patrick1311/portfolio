import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import profilepic from '../img/profilepic.png';
import resume from '../pdf/Resume.pdf';

const useStyles = makeStyles({
    bodyContent: {
      width: '80%',
      alignContent: 'center',
      margin: 'auto',
      marginTop: '20px',
      marginBottom: '20px',
      padding: 20,
      border: '4px groove',
      backgroundColor: 'white',
    },
    header: {
        textAlign: 'center',
    },
    intro: {
        display: 'flex',
        flexDirection: 'row',
        verticalAlign: 'center',
    },
    resumeLink: {
        textDecoration: 'none',
        color: 'white',
    },
    image: {
        width: '200px',
        verticalAlign: 'bottom',
        margin: '16px',
        marginLeft: '0',
        marginTop: '0',
    }
});

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.bodyContent}>
            <h1 className={classes.header}>About Me</h1>
            <div style={{float: 'left'}}>
                <img className={classes.image} src={profilepic} />
                
                <div style={{marginRight: '16px'}}>
                    <div style={{textAlign: 'center', marginBottom: '10px'}}>
                        <Button variant="contained" color="primary">
                            <a href = {resume} target = "_blank" className={classes.resumeLink}>My Resume</a>
                        </Button> 
                    </div>
                </div>
            </div>

            <p>
                I am a <b>Software Engineer</b> at <i>ODME Solutions</i>. We are a team of contractors focus on building
                GCCS-M project (Global Command and Control System - Maritime) for the Navy and Marine Corps. My main responsibility
                is develop front-end web appplications using modern web framework and library like ReactJS. 
                I also contribute in developing as well as testing backend API requests.
                In addition, I take part in daily scrum meetings to discuss about the plan to build the projects 
                as well as attend tech talk meetings arranged by the seniors to learn more about bleeding edge technology.
                Occasionally, I also refactor old code to follow best coding practices.
            </p>
            <p>
                Before that, I used to work for <i>Moebius Solutions</i> as a <b>Junior Software Engineer</b> where we also build project for
                the US Navy. I got the opportunity to work as a <b>Software Developer</b> during summer internship for <i>Rimrock Capital Management</i> right 
                after graduating with a BS Computer Science degree from Cal Poly Pomona. They are a financial investment company. The 
                software team built web applications to assist the business team with data analysis. I have learned all sort of
                useful technology such as React, Redux, and MS SQL database. 
            </p>
            <p>
                During school, I got an opportunity to work for <i>Vanguard IT Solutions</i> as a <b>Web Designer</b>. We built commercial website 
                for our clients as well as managing their website contents and their domain hosting services. In addition, I used to be
                a <b>Computer Science and Math Tutor</b> in <i>Mt. San Antonio College</i>. I provided instructions to individuals or groups of students to prepare
                for their tests, classwork, or homework, improving their academic performance and skills.
            </p>
            <p>
                I am always searching for ways to grow my software engineer career. I am constantly looking out for great opportunity to join team of great developers 
                where I can fit well and contribute my skills.
            </p>
        </div>
    );
};

export default Home;