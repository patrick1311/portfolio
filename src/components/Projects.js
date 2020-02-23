import * as React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core';

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
});

const projects = [
    {
        title: 'Forward - IOS mobile game',
        code: 'https://github.com/patrick1311/Forward',
        info: 'This is a mobile game I developed using Unity Game Engine specifically for IOS platform. \
        The concept is similar to infinite runner games where player keeps on playing to reach the highest score. \
        The game increases in difficulty and speed up as the player get higher scores. More information is available in Github repo.',
    },
    {
        title: 'RapidComics - Comicbook Website',
        code: 'https://github.com/patrick1311/RapidComics',
        info: 'The project was done in a group of five in Software Engineering course. We utilized Django as the framework for \
        this website. The web queries data from our AWS hosted database and displays information for each comicbook we have. \
        The data was scraped from a comicbookdb website. In this project, I was in charge of the front end development. \
        I designed the looks, the layouts and the functionality of the UI.',
    },
    {
        title: 'Chess',
        code: 'https://github.com/patrick1311/Chess-Game',
        info: 'The game app was built as a group of 3 students. We used Java Swing for the UI. The goal was to show \
        that we had a solid understanding of Object Oriented Programming. In this project, my task was building the UI as well \
        as the animation for the chess pieces. In addition, I took part in designing the flow chart as a pre',
    },
    {
        title: 'Matrix multiplication',
        code: 'https://github.com/patrick1311/MatrixMultiplication',
        info: 'The objective of this project was to show the Strassen method of matrix multiplication \
        is more efficient compared to the traditional mathematical way.',
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
                </div>
            </div>
            <p style={{marginBottom: '0px'}}>{item.info}</p>
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