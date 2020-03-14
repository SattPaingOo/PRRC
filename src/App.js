import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import News from './Components/News/News';
import Events from './Components/Events/Events';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/news" component={News}></Route>
          <Route path="/events" component={Events}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
