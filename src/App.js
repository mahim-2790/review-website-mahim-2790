import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import MyCourse from './components/MyCourse/MyCourse';

function App() {
  return (
    <div className="App">
      <Router>
        {/* header component */}
        <Header></Header>
        <Switch>

          {/* home route */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          {/* services */}
          <Route path="/services">
            <Services></Services>
          </Route>
          {/* about */}
          <Route path="/about">
            <About></About>
          </Route>
          {/* support */}
          <Route path="/mycourses">
            <MyCourse></MyCourse>
          </Route>
          {/* not found */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
