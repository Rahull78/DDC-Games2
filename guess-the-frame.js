const frames = [
  {
    src: "./img-src/image1.png",
    name: "Gehraiyaan",
    poster: "./img-src/answer1.jpg",
  },
  {
    src: "./img-src/image2.png",
    name: "Samrat Prithviraj",
    poster: "./img-src/answer2.jpg",
  },
  {
    src: "./img-src/image3.png",
    name: "Darlings",
    poster: "./img-src/answer3.avif",
  },
  {
    src: "./img-src/image4.png",
    name: "Chup Revenge of the Artist",
    poster: "./img-src/answer4.jpg",
  },
  {
    src: "./img-src/image5.png",
    name: "Black Adam",
    poster: "./img-src/answer5.png",
  },
  {
    src: "./img-src/image6.png",
    name: "Goodbye",
    poster: "./img-src/answer6.jpg",
  },
  {
    src: "./img-src/image7.png",
    name: "Drishyam 2",
    poster: "./img-src/answer7.avif",
  },
  {
    src: "./img-src/image88.png",
    name: "Black Panther: Wakanda Forever",
    poster: "./img-src/answer8.jpg",
  },
  {
    src: "./img-src/image9.png",
    name: "Kuttey",
    poster: "./img-src/answer9.jpg",
  },
  {
    src: "./img-src/image10.png",
    name: "Shehzada",
    poster: "./img-src/answer10.webp",
  },
  {
    src: "./img-src/image11.png",
    name: "Kabzaa",
    poster: "./img-src/answer11.jpg",
  },
  {
    src: "./img-src/image12.png",
    name: "Evil Dead Rise",
    poster: "./img-src/answer12.jpg",
  },
  {
    src: "./img-src/image13.png",
    name: "Kisi Ka Bhai Kisi Ki Jaan",
    poster: "./img-src/answer13.jpg",
  },
  {
    src: "./img-src/image14.png",
    name: "Sooryavandhi",
    poster: "./img-src/answer14.jpg",
  },
  {
    src: "./img-src/image15.png",
    name: "Adipurush",
    poster: "./img-src/answer15.webp",
  },
  {
    src: "./img-src/image16.png",
    name: "Sita Ramam",
    poster: "./img-src/answer16.avif",
  },
  {
    src: "./img-src/image17.png",
    name: "IB71",
    poster: "./img-src/answer17.jpg",
  },
  {
    src: "./img-src/image18.png",
    name: "The Diplomat",
    poster: "./img-src/answer18.avif",
  },
  {
    src: "./img-src/image19.png",
    name: "Sardar Udham",
    poster: "./img-src/answer19.webp",
  },
  {
    src: "./img-src/image20.png",
    name: "The Flash",
    poster: "./img-src/answer20.jpg",
  },
  {
    src: "./img-src/image21.png",
    name: "Atrangi Re",
    poster: "./img-src/answer21.jpg",
  },
  {
    src: "./img-src/image22.png",
    name: "Radhe Shyam",
    poster: "./img-src/answer22.jpg",
  },
  {
    src: "./img-src/image23.png",
    name: "Guardians of the Galaxy Vol. 3",
    poster: "./img-src/answer23.jpg",
  },
  {
    src: "./img-src/image24.png",
    name: "Bhuj: The Pride of India",
    poster: "./img-src/answer24.jpg",
  },
  {
    src: "./img-src/image25.png",
    name: "Anek",
    poster: "./img-src/answer25.jpg",
  },
  {
    src: "./img-src/image26.png",
    name: "vedaa",
    poster: "./img-src/answer26.jpg",
  },
  {
    src: "./img-src/image27.png",
    name: "Dhoom3",
    poster: "./img-src/answer27.jpg",
  },
  {
    src: "./img-src/image28.png",
    name: "Race 3",
    poster: "./img-src/answer28.jpg",
  },
  {
    src: "./img-src/image29.png",
    name: "Angrezi Medium",
    poster: "./img-src/answer29.jpg",
  },
  {
    src: "./img-src/image30.png",
    name: "Bharat",
    poster: "./img-src/answer30.jpg",
  },
  {
    src: "./img-src/image31.png",
    name: "Kalank",
    poster: "./img-src/answer31.jpg",
  },
  {
    src: "./img-src/image32.png",
    name: "Uncharted",
    poster: "./img-src/answer32.jpg",
  },
  {
    src: "./img-src/image33.png",
    name: "Cirkus",
    poster: "./img-src/answer33.webp",
  },
  {
    src: "./img-src/image34.png",
    name: "Govinda Naam Mera",
    poster: "./img-src/answer34.jpg",
  },
  {
    src: "./img-src/image35.png",
    name: "Oppenheimer",
    poster: "./img-src/answer35.jpg",
  },
  {
    src: "./img-src/image36.png",
    name: "Bad Boys: Ride or Die",
    poster: "./img-src/answer36.jpg",
  },
  {
    src: "./img-src/image37.png",
    name: "Teraa Surroor",
    poster: "./img-src/answer37.jpg",
  },
];

let currentFrameIndex = 0;
let isAnswerShown = false; // Track whether the answer is displayed

// Store preloaded images
const imageCache = {};

// Preload images on page load
function preloadImages() {
  frames.forEach((frame) => {
    const imgFrame = new Image();
    imgFrame.src = frame.src;
    imageCache[frame.src] = imgFrame;

    const imgPoster = new Image();
    imgPoster.src = frame.poster;
    imageCache[frame.poster] = imgPoster;
  });
}

// Show answer by replacing the frame with the movie poster
function showAnswer() {
  const movieFrame = document.getElementById("movie-frame");

  if (!isAnswerShown) {
    movieFrame.src = frames[currentFrameIndex].poster;
    isAnswerShown = true;
  }
}

// Switch to next frame instantly using cached images
function nextFrame() {
  if (currentFrameIndex === frames.length - 1) {
    // Last frame, show final scores
    document.getElementById("game-container").classList.add("hidden");
    showFinalScores();
  } else {
    // Not the last frame, proceed to next frame
    currentFrameIndex++;
    if (currentFrameIndex < frames.length) {
      const movieFrame = document.getElementById("movie-frame");
      movieFrame.src =
        imageCache[frames[currentFrameIndex].src]?.src ||
        frames[currentFrameIndex].src;
      isAnswerShown = false;
      if (currentFrameIndex === frames.length - 1) {
        document.getElementById("next-frame-btn").textContent = "View Score";
      }
    }
  }
}

// Switch to previous frame instantly using cached images
function previousFrame() {
  if (currentFrameIndex > 0) {
    currentFrameIndex--;
    const movieFrame = document.getElementById("movie-frame");
    movieFrame.src =
      imageCache[frames[currentFrameIndex].src]?.src ||
      frames[currentFrameIndex].src;
    isAnswerShown = false;
    document.getElementById("next-frame-btn").textContent = "Next Frame";
  }
}

// Display the final scores at the end
function showFinalScores() {
  const players = ["abhi", "suraj", "yogi"]; // Added abhi
  const scoreTableBody = document.getElementById("score-table-body");
  scoreTableBody.innerHTML = "";

  let scores = players.map((player) => ({
    name: player.charAt(0).toUpperCase() + player.slice(1),
    score: parseInt(localStorage.getItem(`score-${player}`) || "0"),
  }));

  scores.sort((a, b) => b.score - a.score);

  scores.forEach((player) => {
    scoreTableBody.innerHTML += `<tr><td>${player.name}</td><td>${player.score}</td></tr>`;
  });

  document.getElementById("final-scoreboard").classList.remove("hidden");
}

// Restart the game and go back to homepage
function restartGame() {
  window.location.href = "index.html";
}

window.onload = () => {
  preloadImages();
  resetScores();
};

// Reset scores at the start of the game
function resetScores() {
  ["abhi", "suraj", "yogi"].forEach((player) => {
    // Added abhi
    localStorage.setItem(`score-${player}`, "0");
    document.getElementById(`score-${player}`).textContent = "0";
  });
}

// Update player scores
function updateScore(player, change) {
  let score = parseInt(localStorage.getItem(`score-${player}`) || "0") + change;
  score = Math.max(0, score);
  localStorage.setItem(`score-${player}`, score);
  document.getElementById(`score-${player}`).textContent = score;
}

// Preload images and reset scores when page loads
window.onload = () => {
  preloadImages(); // Start preloading images
  resetScores(); // Reset player scores
};
