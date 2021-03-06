import React from 'react';
import { BrowserRouter as Router, HashRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { makeStyles } from '@material-ui/core';

const bodyStyle = makeStyles({
  body: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '800px',
  },
  mainContent: {
    flex: 1,  
    backgroundColor: 'darkgray',
    fontFamily: 'Brandon Grotesque',
  }
});

function App() {
  const classes = bodyStyle();
  return (
    <HashRouter>
      <div className={classes.body}>
        <Header/>
        
        <div className={classes.mainContent}>
          <Route exact path='/' component={Home} />
          <Route path='/experience' component={Experience} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </div>
        
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
