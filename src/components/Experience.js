import * as React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core';
import moebius from '../img/moebius.png';
import rimrock from '../img/rimrock.png';
import vanguard from '../img/vanguard.png';
import mtsac from '../img/mtsac.png';

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
    companyInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '6px double',
    },
    image: {
        width: '100px',
        verticalAlign: 'bottom',
        margin: '10px',
    }
});

const experience = [
    {
        title: 'Junior Software Engineer',
        company: 'Moebius Solutions, Inc.',
        date: 'December 2019 - Present',
        web: 'https://www.moesol.com/',
        linkedin: 'https://www.linkedin.com/company/moebius-solutions-inc./about/',
        img: moebius,
        location: 'San Diego, CA',
        responsibilities: [
            'Utilized bleeding edge technology React/Redux to build front end web app',
            'Utilized Electron framework to build desktop app with prior web development knowledge',
            'Applied Model-View-Controller pattern for front end java development',
            'Wrote instructional documentation and setup environment to sync Java Swing UI with web app console.'
        ],
        technology: ['JavaScript', 'TypeScript', 'Java', 'React', 'Redux', 'NodeJS', 'Electron', 'Docker', 'Kubernetes', 'BitBucket']
    },
    {
        title: 'Software Developer Intern',
        company: 'Rimrock Capital Management, LLC',
        date: 'July 2019 - September 2019',
        web: 'https://www.rimrockcapital.com/',
        linkedin: 'https://www.linkedin.com/company/rimrock-capital-management-llc/about/',
        img: rimrock,
        location: 'Irvine, CA',
        responsibilities: [
            'Created an automated task scheduler to archive local database records to AWS server with Python scripts',   
            'Created and improved stored procedures for automation and backend API usage',
            'Fixed frontend UI bug due to the incompatibility issue between file formats and backend database',
            'Wrote unit tests for Python automated scripts and database tests for stored procedures'
        ],
        technology: ['Python', 'C#', 'JavaScript', 'React', 'Redux', 'SQL', 'MS SQL', 'TortoiseSVN']
    },
    {
        title: 'Web Developer/Designer Intern',
        company: 'Vanguard IT Solutions',
        date: 'April 2018 - April 2019',
        web: 'https://www.vanguardsolutions.org/',
        linkedin: 'https://www.linkedin.com/company/vanguard-infotech-solutions/about/',
        img: vanguard,
        location: 'Pomona, CA',
        responsibilities: [
            'Designed frontend website for clients using WordPress',
            'Maintained and managed contents based on clients\' needs',
            'Improved SEO to increase website\'s traffic and amount of visitors'
        ],
        technology: ['HTML', 'CSS', 'WordPress']
    },
    {
        title: 'Math and Computer Science Tutor',
        company: 'Mt. San Antonio College',
        date: '2016 - June 2017',
        web: 'https://www.mtsac.edu/',
        linkedin: 'https://www.linkedin.com/school/mount-san-antonio-college-or-mt.-sac/',
        img: mtsac,
        location: 'Walnut, CA',
        responsibilities: [
            'Answered questions and tutored students in Math and Computer Science',
            'Maintained the laboratory to be a productive learning environment',
            'Assisted supervisors on helping students with their homework/classwork problems'
        ],
        technology: ['C++', 'Java']
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
};

const ExpItem = ({item, id}) => {
    const classes = useStyles();
    const isExpanded = (id === 0 ? true : false);

    return (
        <ExpansionPanel className={classes.itemPanel} defaultExpanded={isExpanded} style={{margin: 20}}>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon className={classes.summaryPanelIcon}/>}
            aria-controls="panel2a-content"
            className={classes.summaryPanel}
            >
                <h3 className={classes.headers}>{item.title + ' ----- '}<i>{item.company}</i></h3>
           
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.detailsPanel}>
                <div className={classes.companyInfo}>
                    <div>
                        <h5 className={classes.headers}>{item.date}</h5>
                        <h5 className={classes.headers}>Website: <a href={item.web}>{item.web}</a></h5>
                        <h5 className={classes.headers}>LinkedIn: <a href={item.linkedin}>{item.linkedin}</a></h5>
                        <h5 className={classes.headers}>Location: {item.location}</h5>
                    </div>
                    <div>
                        <img className={classes.image} src={item.img} />
                    </div>
                </div>
                
                <h4 style={{marginBottom: '0px'}}>Responsibilities & Tasks:</h4>
                <ul style={{margin: 0}}>
                    { item.responsibilities.map((task, index) => <li key={index}>{task}</li>) }
                </ul>

                <h4 style={{marginBottom: '0px'}}>Technology, Languages, and Frameworks:</h4>
                <ul style={{margin: 0}}>
                    { item.technology.map((tech, index) => <li key={index}>{tech}</li>) }
                </ul>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default Experience;