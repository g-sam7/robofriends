import React, { Component } from 'react'
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import CardList from "./CardList";

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
    .then(response => {
      return response.json();
    })
    .then(users => {
      this.setState({ robots: users })
    })
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }


  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <Header searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
        <Footer />
    </div>
    )
  }
}

export default App;
