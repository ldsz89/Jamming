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
            playlistName: 'New Playlist',
            playlistTracks: [
                {
                    name: 'Tiny Dancer',
                    artist: 'Elton John',
                    album: 'Madman Across The Water'
                },
            ]
        };

        this.addTrack = this.addTrack.bind(this);
    }

    addTrack(track) {
        if (this.state.playlistTracks.find((savedTrack) => { return savedTrack.id = track.id })) {
            return;
        }
        let updatedPlaylistTracks = this.state.playlistTracks;
        updatedPlaylistTracks.push(track);
        this.setState({ playlistTracks: updatedPlaylistTracks });
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        {/* <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                        <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
