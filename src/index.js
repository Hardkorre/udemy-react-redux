import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyD1DxgSBROIJKWBNnbg7fUTKzzvt48FYvI';

// Create a new component, this component should create HTML
const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it in the DOM
 ReactDOM.render(<App />, document.querySelector('.container'));