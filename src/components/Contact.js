import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import gmail from '../img/gmail.png';

const useStyles = makeStyles({
    bodyContent: {
      width: '80%',
      alignContent: 'center',
      margin: 'auto',
      marginTop: '20px',
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    },
    item: {
         textAlign: 'center',
         minWidth: '460px',
         margin: '10px',
         padding: '20px',
         boxShadow: '0 10px 6px -6px #777',
         backgroundColor: 'white',
         '&:hover': {
            boxShadow: '0 10px 8px 4px #777',
         }
    },
    image: {
        width: '200px',
        verticalAlign: 'bottom',
        margin: '10px',
    }
});

const contact = [
    {
        type: 'website',
        link: 'https://github.com/patrick1311',
        img: github,
    },
    {
        type: 'website',
        link: 'https://www.linkedin.com/in/patrickquach13/',
        img: linkedin,
    },
    {
        type: 'email',
        link: 'patrickquach96@gmail.com',
        img: gmail,
    }
];

const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.bodyContent}>
            { contact.map(contactItem => <ContactItem contactItem={contactItem}/>)}
        </div>
    );
};

const ContactItem = ({contactItem}) => {
    const classes = useStyles();

    return (
        <div className={classes.item}>
            <div>
                <img className={classes.image} src={contactItem.img} />
            </div>
            <div>
                {
                    contactItem.type === 'website' ? 
                    <h3 className={classes.headers}>Link: <a href={contactItem.link} target='_blank'>{contactItem.link}</a></h3> :
                    <h3 className={classes.headers}>Email: <a href={'mailto:' + contactItem.link}>{contactItem.link}</a></h3>
                }
            </div>
        </div>
    );
};

export default Contact;