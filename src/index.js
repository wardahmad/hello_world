import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App';
// import * as serviceWorker from './serviceWorker';

const person = {
    name: 'ward ahmad',
    city: 'Makkah',
    emil: 'whitelight43@hotmail.com',
    favorites: ["movie","porger","songs","programming"]
}

ReactDOM.render(<Hello name={person.name} emil={person.emil} addr={person.city} fave={person.favorites}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
