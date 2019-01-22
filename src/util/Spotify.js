const clientId = 'c3473aac26a846dfa6b36fac1c704ed';
const redirectURI = 'http://localhost:3000';
let userAccessToken;
let expirationTime;

let Spotify = {
    getAccessToken() {
        if (userAccessToken) {
            return;
        }
        let accessToken = window.location.href.match(/access_token=([^&]*)/);
        let expiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (accessToken && expiresIn) {
            userAccessToken = accessToken;
            expirationTime = expiresIn;

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        } else {
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        }
    }
};

export default Spotify;