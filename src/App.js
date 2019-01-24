import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Anasayfa from './components/Home.js';
import Hakkimizda from './components/About';
import Iletisim from './components/Contact';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Anasayfa} />
            <Route path="/contact" component={Iletisim} />
            <Route path="/about" component={Hakkimizda} />
            <Route path="/:postId" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
