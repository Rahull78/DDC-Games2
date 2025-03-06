const frames = [
  {
    src: "./img-src/image1.png",
    name: "Badass Ravikumar",
    poster: "./img-src/answer1.webp",
  },
  {
    src: "./img-src/image2.png",
    name: "Ala Vaikunthapurramuloo",
    poster: "./img-src/answer2.jpg",
  },
  {
    src: "./img-src/image3.png",
    name: "A Thursday",
    poster: "./img-src/answer3.jpg",
  },
  {
    src: "./img-src/image4.png",
    name: "Badhaai Do",
    poster: "./img-src/answer4.jpg",
  },
  { src: "./img-src/image5.png", name: "83", poster: "./img-src/answer5.jpg" },
  {
    src: "./img-src/image6.png",
    name: "Dasvi",
    poster: "./img-src/answer6.jpg",
  },
  {
    src: "./img-src/image7.png",
    name: "Bachchan Pandey",
    poster: "./img-src/answer7.webp",
  },
  {
    src: "./img-src/image8.png",
    name: "Beast",
    poster: "./img-src/answer8.jpg",
  },
  {
    src: "./img-src/image9.png",
    name: "Heropanti 2",
    poster: "./img-src/answer9.jpg",
  },
  {
    src: "./img-src/image10.png",
    name: "Attack",
    poster: "./img-src/answer10.jpg",
  },
  {
    src: "./img-src/image11.png",
    name: "Jayeshbhai Jordaar",
    poster: "./img-src/answer11.jpg",
  },
  {
    src: "./img-src/image12.png",
    name: "Jaadugar",
    poster: "./img-src/answer12.jpg",
  },
  {
    src: "./img-src/image13.png",
    name: "Bhool Bhulaiyaa 2",
    poster: "./img-src/answer13.jpg",
  },
  {
    src: "./img-src/image14.png",
    name: "Shamshera",
    poster: "./img-src/answer14.jpg",
  },
  {
    src: "./img-src/image15.png",
    name: "Dhokha: Round D Corner",
    poster: "./img-src/answer15.jpg",
  },
  {
    src: "./img-src/image16.png",
    name: "Freddy",
    poster: "./img-src/answer16.webp",
  },
  {
    src: "./img-src/image17.png",
    name: "Monica O My Darling",
    poster: "./img-src/answer17.webp",
  },
  {
    src: "./img-src/image18.png",
    name: "Ram Setu",
    poster: "./img-src/answer18.jpg",
  },
  {
    src: "./img-src/image19.png",
    name: "An Action Hero",
    poster: "./img-src/answer19.jpg",
  },
  {
    src: "./img-src/image20.png",
    name: "Karthikeya 2",
    poster: "./img-src/answer20.jpg",
  },
  {
    src: "./img-src/image21.png",
    name: "Mission Majnu",
    poster: "./img-src/answer21.jpg",
  },
  {
    src: "./img-src/image22.png",
    name: "Tiger Zinda Hai",
    poster: "./img-src/answer22.jpg",
  },
  {
    src: "./img-src/image23.png",
    name: "Vadh",
    poster: "./img-src/answer23.jpg",
  },
  {
    src: "./img-src/image24.png",
    name: "Salaam Venky",
    poster: "./img-src/answer24.jpg",
  },
  {
    src: "./img-src/image25.png",
    name: "Pathaan",
    poster: "./img-src/answer25.jpg",
  },
  {
    src: "./img-src/image26.png",
    name: "Chor Nikal Ke Bhaga",
    poster: "./img-src/answer26.jpg",
  },
  {
    src: "./img-src/image27.png",
    name: "Tu Jhoothi Main Makkaar",
    poster: "./img-src/answer27.jpg",
  },
  {
    src: "./img-src/image28.png",
    name: "Bholaa",
    poster: "./img-src/answer28.avif",
  },
  {
    src: "./img-src/image29.png",
    name: "Valaty : Tales of Tails",
    poster: "./img-src/answer29.webp",
  },
  {
    src: "./img-src/image30.png",
    name: "Falimy",
    poster: "./img-src/answer30.webp",
  },
  {
    src: "./img-src/image31.png",
    name: "Parking",
    poster: "./img-src/answer31.jpg",
  },
  {
    src: "./img-src/image32.png",
    name: "Mukundan Unni Associates",
    poster: "./img-src/answer32.jpg",
  },
  {
    src: "./img-src/image33.png",
    name: "Guruvayoor Ambalanadayil",
    poster: "./img-src/answer33.webp",
  },
  {
    src: "./img-src/image34.png",
    name: "August 16 1947",
    poster: "./img-src/answer34.avif",
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

// Display the final scores at the end
function showFinalScores() {
  const players = ["suraj", "yogi"];
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
  ["suraj", "yogi"].forEach((player) => {
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
