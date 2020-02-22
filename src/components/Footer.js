import * as React from 'react';
import { makeStyles } from '@material-ui/core';

const footerStyle = makeStyles({
    footer: {
        height: '60px',
        lineHeight: '60px',
        backgroundColor: '#000000',
        color: '#b5faff',
        textAlign: 'center',
    },
    context: {
        margin: 0,
    }
});

const Footer = () => {
    const classes = footerStyle();
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <div className={classes.footer}>
            <h3 className={classes.context}>
                Copyright &copy; Patrick Quach {currentYear}
            </h3>
        </div>
    );
}

export default Footer;