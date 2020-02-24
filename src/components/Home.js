import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import profilepic from '../img/profilepic.png';
import resume from '../pdf/PQuachResume.pdf';

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
    image: {
        width: '200px',
        verticalAlign: 'bottom',
        margin: '16px',
        marginLeft: '0',
        marginTop: '0',
        float: 'left',
    }
});

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.bodyContent}>
            <h1 className={classes.header}>About Me</h1>
            <img className={classes.image} src={profilepic} />
            
            <p>
                I am a recent graduate with a bachelor degree in Computer Science from 
                California State Polytechnic University, Pomona. I am always looking for opportunities to
                grow and enhance my knowledge as a software engineer to advance my career in today technical industry.
            </p>
            <a href = {resume} target = "_blank">See My Resume</a>
            <p>
                Currently, I am a <b>Junior Software Engineer</b> at <i>Moebius Solutions</i>. We are a team of contractors focus on building
                Command and Control software for the Navy and Marine Corps. My main responsibility
                is develop front-end web appplications using modern web framework and library like ReactJS. 
                In addition, I take part in daily scrum meetings to discuss about the plan to build the projects 
                as well as attend tech talk meetings arranged by the seniors to learn more about bleeding edge technology.
                Occasionally, I also refactor old code to follow best coding practices.
            </p>
            <p>
                Before, I used to work as a <b>Software Developer Intern</b> for <i>Rimrock Capital Management</i>, a financial investment company.
                Our software team built web applications to assist the business team with data analysis. I have learned all sort of
                useful technology such as React, Redux, and MS SQL database. 
            </p>
            <p>
                During school, I got an opportunity to work for <i>Vanguard IT Solutions</i> as a <b>Web Designer</b>. We built commercial website 
                for our clients as well as managing their website contents and their domain hosting services. In addition, I used to be
                a <b>Computer Science and Math Tutor</b> in <i>Mt. San Antonio College</i>. I provided instructions to individuals or groups of students to prepare
                for their tests, classwork, or homework, improving their academic performance and skills.
            </p>
        </div>
    );
};

export default Home;