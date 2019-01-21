import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: '',
        };
    }

    render() {
        return (
            <div>
                <h1>Ja<span class="highlight">mmm</span>ing</h1>
                <div class="App">
                    <SearchBar />
                    <div class="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} />
                        <Playlist />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
