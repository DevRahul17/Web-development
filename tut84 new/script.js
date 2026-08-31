// let currentSong = new Audio();
// let songs = [];
// let currFolder = "";
// let currentSongIndex = 0;


// // ==========================================
// // GET SONGS FROM FOLDER
// // ==========================================

// async function getSongs(folder) {

//     currFolder = folder;

//     try {

//         // ./ is important because your project
//         // is inside "tut84 new"
//         let response = await fetch(`./${folder}/`);

//         let text = await response.text();

//         let div = document.createElement("div");
//         div.innerHTML = text;

//         let links = div.getElementsByTagName("a");

//         songs = [];

//         for (let i = 0; i < links.length; i++) {

//             let element = links[i];

//             // Check whether file is MP3
//             if (element.href.toLowerCase().endsWith(".mp3")) {

//                 let songName =
//                     element.href.split(`/${folder}/`)[1];

//                 if (songName) {
//                     songs.push(decodeURIComponent(songName));
//                 }
//             }
//         }

//         console.log("Songs found:", songs);

//         return songs;

//     } catch (error) {

//         console.error("Error getting songs:", error);

//         return [];

//     }
// }


// // ==========================================
// // PLAY MUSIC
// // ==========================================

// function playMusic(track, pause = false) {

//     if (!track) {
//         return;
//     }

//     // Create path to MP3
//     currentSong.src =
//         `./${currFolder}/${encodeURIComponent(track)}`;

//     // Show song name
//     let songInfo =
//         document.querySelector(".songinfo");

//     if (songInfo) {

//         songInfo.innerHTML =
//             decodeURIComponent(track);

//     }

//     // Play song
//     if (!pause) {

//         currentSong.play()
//             .then(() => {

//                 console.log("Playing:", track);

//                 // Change play icon to pause
//                 if (playButton) {
//                     playButton.src = "pause.svg";
//                 }

//             })
//             .catch(error => {

//                 console.error(
//                     "Could not play song:",
//                     error
//                 );

//             });

//     }
// }


// // ==========================================
// // FORMAT TIME
// // ==========================================

// function formatTime(seconds) {

//     if (isNaN(seconds) || seconds < 0) {

//         return "00:00";

//     }

//     let minutes =
//         Math.floor(seconds / 60);

//     let secs =
//         Math.floor(seconds % 60);

//     if (secs < 10) {

//         secs = "0" + secs;

//     }

//     return `${minutes}:${secs}`;
// }


// // ==========================================
// // MAIN
// // ==========================================

// async function main() {

//     // Get songs from "songs" folder
//     await getSongs("songs");


//     // ======================================
//     // FIND PLAYBAR BUTTONS
//     // ======================================

//     let songButtons =
//         document.querySelector(".songbuttons");


//     if (!songButtons) {

//         console.error(
//             "Could not find .songbuttons"
//         );

//         return;

//     }


//     let buttons =
//         songButtons.getElementsByTagName("img");


//     // Your existing HTML:
//     //
//     // buttons[0] = previous
//     // buttons[1] = play
//     // buttons[2] = next

//     let previousButton = buttons[0];

//     let playButton = buttons[1];

//     let nextButton = buttons[2];


//     // ======================================
//     // LOAD FIRST SONG
//     // ======================================

//     if (songs.length > 0) {

//         currentSongIndex = 0;

//         playMusic(
//             songs[currentSongIndex],
//             true
//         );

//     } else {

//         console.log("No MP3 files found.");

//     }


//     // ======================================
//     // PLAY / PAUSE BUTTON
//     // ======================================

//     playButton.addEventListener("click", () => {

//         // If no song loaded
//         if (!currentSong.src) {

//             if (songs.length > 0) {

//                 playMusic(
//                     songs[currentSongIndex]
//                 );

//             }

//             return;

//         }


//         // If song is paused
//         if (currentSong.paused) {

//             currentSong.play();

//             playButton.src = "pause.svg";

//             console.log("Playing");

//         }

//         // If song is playing
//         else {

//             currentSong.pause();

//             playButton.src = "play.svg";

//             console.log("Paused");

//         }

//     });


//     // ======================================
//     // NEXT SONG
//     // ======================================

//     nextButton.addEventListener("click", () => {

//         if (songs.length === 0) {
//             return;
//         }

//         currentSongIndex++;

//         // Go back to first song
//         if (currentSongIndex >= songs.length) {

//             currentSongIndex = 0;

//         }

//         playMusic(
//             songs[currentSongIndex]
//         );

//     });


//     // ======================================
//     // PREVIOUS SONG
//     // ======================================

//     previousButton.addEventListener("click", () => {

//         if (songs.length === 0) {
//             return;
//         }

//         currentSongIndex--;

//         // Go to last song
//         if (currentSongIndex < 0) {

//             currentSongIndex =
//                 songs.length - 1;

//         }

//         playMusic(
//             songs[currentSongIndex]
//         );

//     });


//     // ======================================
//     // SONG ENDED
//     // ======================================

//     currentSong.addEventListener("ended", () => {

//         if (songs.length === 0) {
//             return;
//         }

//         currentSongIndex++;

//         if (currentSongIndex >= songs.length) {

//             currentSongIndex = 0;

//         }

//         playMusic(
//             songs[currentSongIndex]
//         );

//     });


//     // ======================================
//     // UPDATE SONG TIME
//     // ======================================

//     currentSong.addEventListener(
//         "timeupdate",
//         () => {

//             let songTime =
//                 document.querySelector(".songtime");

//             if (!songTime) {
//                 return;
//             }

//             let currentTime =
//                 currentSong.currentTime;

//             let duration =
//                 currentSong.duration;

//             if (!isNaN(duration)) {

//                 songTime.innerHTML =
//                     `${formatTime(currentTime)} / ${formatTime(duration)}`;

//             }

//         }
//     );


//     // ======================================
//     // WHEN SONG STARTS PLAYING
//     // ======================================

//     currentSong.addEventListener(
//         "play",
//         () => {

//             playButton.src = "pause.svg";

//         }
//     );


//     // ======================================
//     // WHEN SONG IS PAUSED
//     // ======================================

//     currentSong.addEventListener(
//         "pause",
//         () => {

//             playButton.src = "play.svg";

//         }
//     );


//     // ======================================
//     // DEBUG
//     // ======================================

//     console.log(
//         "Spotify player ready!"
//     );

//     console.log(
//         "Number of songs:",
//         songs.length
//     );

// }


// // ==========================================
// // START APP
// // ==========================================

// main();




///////////////
async function main() {
    let a = await fetch("http://127.0.0.1:5500/tut84%20new/songs/song1.mp3")
    let response = await a.text();
    console.log(response)
}

main();