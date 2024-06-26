const playBtn = document.getElementById("playBtn");

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
