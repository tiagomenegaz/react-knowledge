import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

const cardList = <div><Card /><Card /><Card /></div>

ReactDOM.render(cardList, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
