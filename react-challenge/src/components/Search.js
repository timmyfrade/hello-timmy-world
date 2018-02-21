import React from 'react'

import './Search.css'

class SearchBar extends React.Component {
    onInputChange(term) {
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search">
                <input placeholder="Enter text to search for gifs!" onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;


