const METAL_PLAY_LIST = [
    {
        name: 'Down with the Sickness',
        url: 'https://www.youtube.com/embed/09LTT0xwdfw',
        urlNotEmbedded: 'https://www.youtube.com/watch?v=09LTT0xwdfw',
        band: 'Disturbed',
        timesListened: 800,
    },
    {
        name: 'Blind',
        url: 'https://www.youtube.com/embed/SGK00Q7xx-s?si=MyHVednGQIsdQxAC',
        urlNotEmbedded: 'https://www.youtube.com/watch?v=SGK00Q7xx-s?si=MyHVednGQIsdQxAC',
        band: 'Korn',
        timesListened: 520,
    },
    {
        name: 'Enter Sandman',
        url: 'https://www.youtube.com/embed/CD-E-LDc384',
        urlNotEmbedded: 'https://www.youtube.com/watch?v=CD-E-LDc384',
        band: 'Metallica',
        timesListened: 1000,
    },
    {
        name: 'Paranoid',
        url: 'https://www.youtube.com/embed/ukW3oeFflVE',
        urlNotEmbedded: 'https://www.youtube.com/watch?v=ukW3oeFflVE',
        band: 'Black Sabbath',
        timesListened: 800,
    },
    {
        name: 'The Trooper',
        url: 'https://www.youtube.com/embed/X4bgXH3sJ2Q',
        urlNotEmbedded: 'https://www.youtube.com/watch?v=X4bgXH3sJ2Q',
        band: 'Iron Maiden',
        timesListened: 700,
    },
    {
        name: 'Master of Puppets',
        url: 'https://www.youtube.com/embed/xnKhsTXoKCI',
        urlNotEmbedded: 'https://www.youtube.com/watch?v=xnKhsTXoKCI',
        band: 'Metallica',
        timesListened: 1200,
    },
    {
        name: 'Bodies',
        url: 'https://www.youtube.com/embed/04F4xlWSFh0',
        urlNotEmbedded: 'https://www.youtube.com/watch?v=04F4xlWSFh0',
        band: 'Drowning Pool',
        timesListened: 600,
    }
]
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const METAL_PLAY_LIST_CONTAINER = document.getElementById('metal-play-list-container');

const SEARCH_BUTTON = document.getElementById('search-songs-button');

const SEARCH_INPUT = document.getElementById('search-songs-input');

SEARCH_INPUT.addEventListener('input', () => {
    const searchValue = SEARCH_INPUT.value;
    console.log(searchValue)
    const filteredSongs = METAL_PLAY_LIST.filter((song) => {
        return song.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    METAL_PLAY_LIST_CONTAINER.innerHTML = '';
    printSongs(filteredSongs);


});

function printSongs(songs) {
    if(songs.length === 0) {
        const noResults = document.createElement('h2');
        noResults.className = 'no-results';
        noResults.textContent = 'No results found';
        METAL_PLAY_LIST_CONTAINER.appendChild(noResults);
        return;
    }
    songs.forEach((song) => {
        const songContainer = document.createElement('div');
        songContainer.className = 'song-container';
    
        const songName = document.createElement('h2');
        songName.textContent = song.name;
    
        const songBand = document.createElement('h3');
        songBand.textContent = song.band;
    
    
        const songTimesListened = document.createElement('p');
        songTimesListened.textContent = `Times listened: ${song.timesListened}`;
    
        const songVideo = document.createElement('iframe');
        songVideo.src = song.url;
        songVideo.width = 360;
        songVideo.height = 315;
    
        songContainer.appendChild(songName);
        songContainer.appendChild(songBand);
        songContainer.appendChild(songVideo);
        songContainer.appendChild(songTimesListened);

        songContainer.addEventListener('click', () => {
            window.location.href = song.urlNotEmbedded;
        });
    
        songContainer.addEventListener('click', () => {
            song.timesListened += 1;
            songTimesListened.textContent = `Times listened: ${song.timesListened}`;
        });
    
    
        METAL_PLAY_LIST_CONTAINER.appendChild(songContainer);
    });
    
    

}

printSongs(METAL_PLAY_LIST);