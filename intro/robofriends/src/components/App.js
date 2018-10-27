import React from 'react';
import CardList from './CardList';
import { robots } from '../robots';

const App = () => {
  return (
    <div>
      <h1>Robofriends</h1>
      <CardList elements={ robots } />
    </div>
  );
}

export default App;
