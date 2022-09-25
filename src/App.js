import React, { Component } from 'react'
import Header from "./Header";
import Footer from "./Footer";
import { robots } from "./robots";
import CardList from "./CardList";

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: '',
    }
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
