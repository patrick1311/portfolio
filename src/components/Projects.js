import * as React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core';
import Gameplay from '../img/Gameplay.png';
import HomeScreen from '../img/HomeScreen.png';
import StartRun from '../img/StartRun.png';
import Chess from '../img/Chess.png';
import ChessMove from '../img/ChessMove.png';
import WebHome from '../img/WebHome.png';
import ComicPage from '../img/ComicPage.png';

const useStyles = makeStyles({
    bodyContent: {
      width: '80%',
      alignContent: 'center',
      margin: 'auto',
      marginTop: '20px',
      marginBottom: '20px',
    },
    itemPanel: {
        boxShadow: '0 10px 6px -6px #777',
        '&:hover': {
            boxShadow: '0 10px 8px 4px #777',
        }
    },
    summaryPanel: {
        backgroundColor: '#3f51b5',
        color: 'white',
    },
    summaryPanelIcon: {
        fill: 'white',
    },
    detailsPanel: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: '24px',
    },
    headers: {
        margin: '10px',
        overflow: 'none',
    },
    projectInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '6px double',
    },
    projectContent: {
        textAlign: 'center',
    },
    imageBlock: {
        textAlign: 'center',
    },
    image: {
        width: '250px',
        verticalAlign: 'bottom',
        margin: '10px',
    }
});

const projects = [
    {
        title: 'Forward - IOS Mobile Game Development',
        code: 'https://github.com/patrick1311/Forward',
        img: [HomeScreen, StartRun, Gameplay],
        info: 'This is a 3D mobile game I developed using Unity Game Engine specifically for IOS platform. This is my final project \
        of my school years. The concept is similar to infinite runner games where player keeps on playing to reach the highest score. \
        The game increases in difficulty and speed up as the player get higher scores. The app was developed mainly using C# and some \
        free 3D object assets provided by Unity Store. More information about how the game was built is available on Github repo.',
    },
    {
        title: 'RapidComics - Web Development',
        web: 'http://rrcomics-env.n8qcccpvs8.us-west-1.elasticbeanstalk.com',
        code: 'https://github.com/patrick1311/RapidComics',
        img: [WebHome, ComicPage],
        info: 'The project was done in a group of five in Software Engineering course. We utilized Django as the framework for \
        this website. The web queries data from our AWS hosted database and displays information for each comicbook we have. \
        The data was scraped from a comicbookdb website. The web acts as a social media platform where users can create account, \
        like, dislike, give ratings, and comments on their comicbook of choice. In this project, I was in charge of the front end development. \
        I designed the looks, the layouts and the functionality of the UI.',
    },
    {
        title: 'Chess - Java Swing Game',
        code: 'https://github.com/patrick1311/Chess-Game',
        img: [Chess, ChessMove],
        info: 'The game app was built as a group of 3 students. We used Java Swing for the UI. This game allows 2 players \
        to play against each other. The goal was to show that we had a solid understanding of Object Oriented Programming. \
        In this project, my task was building the UI as well as the animation for the chess pieces. \
        In addition, I took part in designing the flow chart and our app design.',
    },
    {
        title: 'Matrix multiplication - Data Structures and Algorithm',
        code: 'https://github.com/patrick1311/MatrixMultiplication',
        img: [],
        info: 'The objective of this project was to show the Strassen method of matrix multiplication \
        is more efficient compared to the traditional mathematical way. The program stores the run time of each method \
        to compare them and show which method is better.',
    }
];

const ProjItem = ({item, id}) => {
    const classes = useStyles();
    const isExpanded = (id === 0 ? true : false);

    return (
        <ExpansionPanel className={classes.itemPanel} defaultExpanded={isExpanded} style={{margin: 20}}>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon className={classes.summaryPanelIcon}/>}
            aria-controls="panel2a-content"
            className={classes.summaryPanel}
            >
                <h3 className={classes.headers}>{item.title}</h3>
           
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.detailsPanel}>
            <div className={classes.projectInfo}>
                <div>
                    <h4 className={classes.headers}>Source code: <a href={item.code} target='_blank'>{item.code}</a></h4>
                    {
                        item.hasOwnProperty('web') ?
                        <h4 className={classes.headers}>Web URL: <a href={item.web} target='_blank'>{item.web}</a></h4> :
                        <React.Fragment></React.Fragment>
                    }
                </div>
            </div>
            <p className ={classes.projectContent} style={{marginBottom: '0px'}}>{item.info}</p>
            <div className={classes.imageBlock}>
                {
                    item.img.map((image, index) => <img className={classes.image} src={image} />)
                }
            </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

const Projects = () => {
    const classes = useStyles();
    return (
        <div className={classes.bodyContent}>
            { 
                projects.map((item, index) => {
                    return <ProjItem item={item} id={index} key={index}/> 
                })
            }
        </div>
    );
};

export default Projects;