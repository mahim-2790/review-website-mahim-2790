import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

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


        </Switch>
      </Router>
    </div>
  );
}

export default App;
