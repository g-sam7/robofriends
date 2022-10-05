import React, { Component } from 'react'
import './App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }


  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ? (
        <h1>Loading...</h1>
      ) : (
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <Header searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
        <Footer />
      </div>
    )
  }
}

export default App;
