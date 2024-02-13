document.addEventListener('DOMContentLoaded', function() {
    const songList = document.getElementById('song-list');
    const audioPlayer = document.getElementById('audio-player');
  
    // Function to add songs to the playlist
    function addSongToPlaylist(filename) {
      const listItem = document.createElement('li');
      listItem.textContent = filename;
      listItem.addEventListener('click', function() {
        playSong(filename);
      });
      songList.appendChild(listItem);
    }
  
    // Function to play a song
    function playSong(filename) {
      audioPlayer.src = `assets/audio/${filename}`;
      audioPlayer.play();
    }
  
    // Load songs from assets/audio folder
    function loadSongs() {
      // You can fetch the list of songs from a server or define them manually
      const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
      songs.forEach(song => {
        addSongToPlaylist(song);
      });
    }
  
    // Load songs when the page is loaded
    loadSongs();
  });
  