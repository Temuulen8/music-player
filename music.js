const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const previous = document.getElementById("previousBtn");
const audioPlayer = document.getElementsByTagName("audio")[0];
const playList = [
  { src: "./Clairo - Flamin Hot Cheetos.mp3" },
  { src: "./Frank Ocean - White Ferrari.mp3" },
  {
    src: "./Puff Daddy - I'll Be Missing You (Lyrics) feat. Faith Evans, 112.mp3",
  },
];
let currentSong = 0;

playBtn.addEventListener("click", () => {
  //play song
  const audio = document.getElementsByTagName("audio")[0];

  if (playBtn.innerText === "play") {
    audio.src = "./Clairo - Flamin Hot Cheetos.mp3";
    audio.play();
    playBtn.innerText = "pause";
  } else {
    audio.pause();
    playBtn.innerText = "play";
  }

  console.log("AUD", audio);
});
// function change_word() {
//   playBtn.innerText = "pause";
// }

// playBtn.addEventListener("click", change_word);
// songs = ["song1 path", "songs2 path",  "songs3 path"]
// next button -> songs[1], songs[2]
nextBtn.addEventListener("click", () => {
  currentSong++;
  if (currentSong === playList.length) {
    currentSong = 0;
  }
  audioPlayer.src = playList[currentSong].src;
  audioPlayer.play();
  console.log("CS", currentSong);
});
previous.addEventListener("click", () => {
  currentSong--;
  if (currentSong === playList.length) {
    currentSong = 0;
  }
  audioPlayer.src = playList[currentSong].src;
  audioPlayer.play();
  console.log("CS", currentSong);
});
