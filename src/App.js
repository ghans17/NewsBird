import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News  from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey="69d36cf738934f56aec771df14b07b3d"
  state = {
    progress: 0
  };

  setProgress=(progress)=> {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={this.state.progress} height={3}/>
          <Routes>
            <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pagesize={15} Category="business" Country="in" />} />
            <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pagesize={15} Category="general" Country="in" />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pagesize={15} Category="entertainment" Country="in" />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pagesize={15} Category="health" Country="in" />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pagesize={15} Category="science" Country="in" />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pagesize={15} Category="sports" Country="in" />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pagesize={1} Category="technology" Country="in" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
