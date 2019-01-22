import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                {
                    id: 0,
                    name: 'Tiny Dancer',
                    artist: 'Elton John',
                    album: 'Madman Across The Water'
                },
                {
                    id: 1,
                    name: 'Tiny Dancer',
                    artist: 'Tim McGraw',
                    album: 'Love Story'
                },
                {
                    id: 2,
                    name: 'Tiny Dancer',
                    artist: 'Rockabye Baby!',
                    album: 'Lullaby Renditions of Elton John'
                },
                {
                    id: 3,
                    name: 'Tiny Dancer',
                    artist: 'The White Raven',
                    album: 'Tiny Dancer'
                },
                {
                    id: 4,
                    name: 'Tiny Dancer - Album Version',
                    artist: 'Ben Folds',
                    album: 'Ben Folds Live'
                },
            ],
            playlistName: 'New Playlist',
            playlistTracks: [
                {
                    id: 5,
                    name: 'Stronger',
                    artist: 'Britney Spears',
                    album: 'Oops!... I Did It Again'
                },
                {
                    id: 6,
                    name: 'So Emotional',
                    artist: 'Whitney Houston',
                    album: 'Whitney'
                },
                {
                    id: 7,
                    name: 'It\'s Not Right But It\'s Okay',
                    artist: 'Whitney Houston',
                    album: 'My Love Is Your Love'
                },
            ]
        };

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }

    addTrack(track) {
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id )) {
            return;
        }
        let updatedPlaylistTracks = this.state.playlistTracks;
        updatedPlaylistTracks.push(track);
        this.setState({ playlistTracks: updatedPlaylistTracks });
    }

    removeTrack(track) {
        let updatedPlaylistTracks = this.state.playlistTracks.filter(currentTrack => {
            return currentTrack.id !== track.id;
        });
        this.setState({ playlistTracks: updatedPlaylistTracks });
    }

    updatePlaylistName(name) {
        this.setState({ playlistName: name });
    }

    savePlaylist() {
        let trackURIs = [];
        this.state.playlistTracks.forEach(track => {
            trackURIs.push(track.track_uri);
        });
    }

    search(query) {
        console.log(query);
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar onSearch={this.search} />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                        <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;