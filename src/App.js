import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import { JobListings } from './components/JobListings';
import { AddaJob } from './components/AddaJob';

class App extends Component {
  state = { 
    jobs: [],
   };

  componentDidMount() {
    this.getListings();
  }

  getListings = () => {
    return fetch('./listings.json')
      .then(response => response.json())
      .then(jobs => {
        this.setState({ jobs });
      });
  };


  addListing = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const updatedListings = this.state.jobs;
    console.log('why arent you listing new things!!!!')
    var newJob = {
      id: updatedListings.length + 1,
      title: data.get("title"),
      pay: data.get("pay"),
      description: data.get("description"),
      interested: []
    }
    updatedListings.push(newJob);
    this.setState({jobs: updatedListings})
    // event.target.reset();
  };

  render() {
    return (
      <div>
        <Header />
        <main>
          <JobListings jobs={this.state.jobs} />
          <AddaJob addListing={this.addListing} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;