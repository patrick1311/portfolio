import * as React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
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
    summaryPanel: {
        backgroundColor: '#3f51b5',
        color: 'white',
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
    }
});

const experience = [
    {
        title: 'Junior Software Engineer II',
        company: 'Moebius Solutions, Inc.',
        date: 'December 2019 - Present',
        web: 'https://www.moesol.com/',
        linkedin: 'https://www.linkedin.com/company/moebius-solutions-inc./about/',
        responsibilities: [
            'sd',
            'asd',
            'asd'
        ]
    },
    {
        title: 'Software Developer Intern',
        company: 'Rimrock Capital Management, LLC',
        date: 'July 2019 - September 2019',
        web: 'https://www.rimrockcapital.com/',
        linkedin: 'https://www.linkedin.com/company/rimrock-capital-management-llc/about/',
        responsibilities: [
            'sd',   
            'asd',
            'asd'
        ]
    },
    {
        title: 'Web Developer/Design Intern',
        company: 'Vanguard IT Solutions',
        date: 'April 2018 - April 2019',
        web: 'https://www.vanguardsolutions.org/',
        linkedin: 'https://www.linkedin.com/company/vanguard-infotech-solutions/about/',
        responsibilities: [
            'sd',
            'asd',
            'asd'
        ]
    },
    {
        title: 'Math and Computer Science Tutor',
        company: 'Mt. San Antonio College',
        date: '2016 - June 2017',
        web: 'https://www.mtsac.edu/',
        linkedin: 'https://www.linkedin.com/school/mount-san-antonio-college-or-mt.-sac/',
        responsibilities: [
            'sd',
            'asd',
            'asd'
        ]
    }
];

const Experience = () => {
    const classes = useStyles();
    return (
        <div className={classes.bodyContent}>
            { 
                experience.map((item, index) => {
                    return <ExpItem item={item} id={index} key={index}/> 
                })
            }
        </div>
    );
}

const ExpItem = ({item, id}) => {
    const classes = useStyles();
    const isExpanded = (id === 0 ? true : false);
    return (
        <ExpansionPanel defaultExpanded={isExpanded} style={{margin: 20}}>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            className={classes.summaryPanel}
            >
                <h4 className={classes.headers}>{item.title + ' ----- '}<i>{item.company}</i></h4>
           
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.detailsPanel}>

                <h5 className={classes.headers}>{item.date}</h5>
                <h5 className={classes.headers}>Website: <a href={item.web}>{item.web}</a></h5>
                <h5 className={classes.headers}>LinkedIn: <a href={item.linkedin}>{item.linkedin}</a></h5>
                <ul>
                    {item.responsibilities.map((task, index) => {
                        return <li key={index}>{task}</li>
                    })
                    }
                </ul>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

export default Experience;