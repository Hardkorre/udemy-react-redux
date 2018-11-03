import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD1DxgSBROIJKWBNnbg7fUTKzzvt48FYvI';

// Create a new component, this component should create HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it in the DOM
 ReactDOM.render(<App />, document.querySelector('.container'));