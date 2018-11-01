import './App.css';
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { robots } from '../robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return (
        <div className='tc'>
          <h1>Robofriends</h1>
        </div>
      );
    } else {
      return (
        <div className='tc'>
          <h1>Robofriends</h1>
          <SearchBox searchChange={ this.onSearchChange } />
          <Scroll>
            <CardList elements={ filteredRobots } />
          </Scroll>
        </div>
      );
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
}

export default App;