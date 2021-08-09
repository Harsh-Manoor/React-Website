import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import SignIn from './components/Pages/SignIn';

function App() {
  return (
    <>
       <Router>
          <NavBar/>
          <div className='pages'>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/sign-in" component={SignIn}/>
          </Switch>
          </div>
       </Router>
       
    </>
  );
}

export default App;
