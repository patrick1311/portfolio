import * as React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import profilepic from '../img/profilepic.png';
import StarIcon from '@material-ui/icons/Star';

const navBarStyle = makeStyles({
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    link: {
        flex: 1,
        textDecoration: 'none',
        width: '15%',
        height: '50px',
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: '0%',
    },
    imgBlock: {
        textAlign: 'center',
        backgroundColor: '#000000'
    },
    img: {
        verticalAlign: 'bottom',
        width: '200px',
    },
    header: {
        minHeight: '150px',
        color: '#b5faff',
        backgroundColor: 'black', 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    headerItem: {
        margin: 0,
    }
});

const Header = () => {
    const classes = navBarStyle();
    return (
        <div>
            <div className={classes.header}>
                <h1 className={classes.headerItem}>Patrick <StarIcon /> Quach</h1>
                <h2 className={classes.headerItem}>--- Portfolio ---</h2>
                <h2 className={classes.headerItem}>Software Engineer</h2>
            </div>
            <AppBar className={classes.navBar} position="static">
                <Link className={classes.link} to="/">
                    <Button className={classes.button} variant="contained" color="primary">
                        Home
                    </Button>
                </Link>
                <Link className={classes.link} to="/experience">
                    <Button className={classes.button} variant="contained" color="primary">
                        Experience
                    </Button>
                </Link>
                <Link className={classes.link} to="/projects">
                    <Button className={classes.button} variant="contained" color="primary">
                        Projects
                    </Button>
                </Link>
                <Link className={classes.link} to="/contact">
                    <Button className={classes.button} variant="contained" color="primary">
                        Contact
                    </Button>
                </Link>
            </AppBar>
        </div>
    );
}

export default Header;