import React from 'react';
import { BrowserRouter as Router, HashRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <HashRouter>
      <Header/>
      <Route exact path='/' component={Home} />
      <Route path='/experience' component={Experience} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Contact} />
      <Footer/>
    </HashRouter>
  );
}

export default App;
