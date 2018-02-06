import React from 'react'; //react library
import ReactDOM from 'react-dom'; //react DOM - to manipulate elements
//import App from './App'; 
import './index.css';
import SearchBar from './components/Search';
import GifList from './components/SelectedList';

class Root extends React.Component { //Component that will serve as the parent for the rest of the application.

	constructor() {
        super();

        this.state = {
            gifs: []
        }
        this.handleTermChange = this.handleTermChange.bind(this)
    }

	handleTermChange(term) {
	   	console.log(term);
		let url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=aOfWv08Of7UqS6nBOzsO36NDvwYzO6io`;
		 	fetch(url).
		then(response => response.json()).then((gifs) => {
		    console.log(gifs);
		    this.setState({
		        gifs: gifs
		    });
		});
	};	


    render() {
	    return (
	      <div>
	        <SearchBar onTermChange={this.handleTermChange} />
	        <GifList gifs={this.state.gifs} />
	      </div>
	    );
	}
}

ReactDOM.render( <Root />, document.getElementById('root'));

