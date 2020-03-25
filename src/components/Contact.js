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
         minWidth: '300px',
         margin: '10px',
         padding: '20px',
         boxShadow: '0 10px 6px -6px #777',
         backgroundColor: 'white',
         '&:hover': {
            boxShadow: '0 10px 8px 4px #777',
         }
    },
    itemLink: {
        textDecoration: 'none'
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
            {
                contactItem.type === 'website' ?
                <a href={contactItem.link} target='_blank' className={classes.itemLink}>
                    <div>
                        <img className={classes.image} src={contactItem.img} />
                    </div>
                    <div>
                        <h5 className={classes.headers}>Link: {contactItem.link}</h5>
                    </div>
                </a> :
                <a href={'mailto:' + contactItem.link} className={classes.itemLink}>
                    <div>
                        <img className={classes.image} src={contactItem.img} />
                    </div>
                    <div>
                        <h5 className={classes.headers}>Email: {contactItem.link}</h5>
                    </div>
                </a>
            }
        </div>
    );
};

export default Contact;