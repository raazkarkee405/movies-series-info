import React from 'react';
import {Provider} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Landing from './components/home/Landing'
import Movie from './components/home/Movie'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>  
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing}/>
          <Route exact path="/movie/:id" component={Movie}/>
          <Footer />
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
