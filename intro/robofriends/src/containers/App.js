import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchField,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (robots.length === 0) {
      return (
        <div className='tc'>
          <h1>Robofriends</h1>
        </div>
      );
    } else {
      return (
        <div className='tc'>
          <h1>Robofriends</h1>
          <SearchBox searchChange={ onSearchChange } />
          <Scroll>
            <ErrorBoundry>
              <CardList elements={ filteredRobots } />
            </ErrorBoundry>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
