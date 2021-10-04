import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Serices/Services';

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

          <Route path="/services">
            <Services></Services>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
