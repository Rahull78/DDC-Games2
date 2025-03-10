const frames = [
  {
    src: "./img-src/image1.png",
    name: "Simmba",
    poster: "./img-src/answer1.jpg",
  },
  {
    src: "./img-src/image2.png",
    name: "Saaho",
    poster: "./img-src/answer2.jpg",
  },
  {
    src: "./img-src/image3.png",
    name: "Vikram",
    poster: "./img-src/answer3.jpg",
  },
  {
    src: "./img-src/image4.png",
    name: "Hit the First Case",
    poster: "./img-src/answer4.jpg",
  },
  {
    src: "./img-src/image5.png",
    name: "Final Destination",
    poster: "./img-src/answer5.jpg",
  },
  {
    src: "./img-src/image6.png",
    name: "Tere Ishq Mein",
    poster: "./img-src/answer6.jpg",
  },
  {
    src: "./img-src/image7.png",
    name: "Ek Villain Returns",
    poster: "./img-src/answer7.jpg",
  },
  {
    src: "./img-src/image8.png",
    name: "The Sabarmati Report",
    poster: "./img-src/answer8.jpg",
  },
  {
    src: "./img-src/image9.png",
    name: "Chandu Champion",
    poster: "./img-src/answer9.jpg",
  },
  {
    src: "./img-src/image10.png",
    name: "Venom The Last Dance",
    poster: "./img-src/answer10.png",
  },
  {
    src: "./img-src/image11.png",
    name: "Joker 2",
    poster: "./img-src/answer11.jpg",
  },
  {
    src: "./img-src/image12.png",
    name: "Rocky Aur Rani Kii Prem Kahaani",
    poster: "./img-src/answer12.jpg",
  },
  {
    src: "./img-src/image13.png",
    name: "Bawaal",
    poster: "./img-src/answer13.jpg",
  },
  {
    src: "./img-src/image14.png",
    name: "Fast X",
    poster: "./img-src/answer14.jpg",
  },
  {
    src: "./img-src/image15.png",
    name: "Premalu",
    poster: "./img-src/answer15.jpg",
  },
  {
    src: "./img-src/image16.png",
    name: "Dream Girl",
    poster: "./img-src/answer16.jpg",
  },
  {
    src: "./img-src/image17.png",
    name: "Guntur Kaaram",
    poster: "./img-src/answer17.jpg",
  },
  {
    src: "./img-src/image18.png",
    name: "Vijay The Master",
    poster: "./img-src/answer18.jpg",
  },
  {
    src: "./img-src/image19.png",
    name: "Jersey",
    poster: "./img-src/answer19.jpg",
  },
  {
    src: "./img-src/image20.png",
    name: "The Meg 2",
    poster: "./img-src/answer20.jpg",
  },
  {
    src: "./img-src/image21.png",
    name: "Article 370",
    poster: "./img-src/answer21.jpg",
  },
  {
    src: "./img-src/image22.png",
    name: "Vash",
    poster: "./img-src/answer22.jpg",
  },
  {
    src: "./img-src/image23.png",
    name: "Chal Jeevi Laiye",
    poster: "./img-src/answer23.jpg",
  },
  {
    src: "./img-src/image24.png",
    name: "Ludo",
    poster: "./img-src/answer24.jpg",
  },
  {
    src: "./img-src/image25.png",
    name: "Free Guy",
    poster: "./img-src/answer25.jpg",
  },
  {
    src: "./img-src/image26.png",
    name: "Godzilla Vs Kong",
    poster: "./img-src/answer26.jpg",
  },
  {
    src: "./img-src/image27.png",
    name: "Bullet Train",
    poster: "./img-src/answer27.jpg",
  },
  {
    src: "./img-src/image28.png",
    name: "Bhediya",
    poster: "./img-src/answer28.jpg",
  },
  {
    src: "./img-src/image29.png",
    name: "Vaazha",
    poster: "./img-src/answer29.jpg",
  },
  {
    src: "./img-src/image30.png",
    name: "Nani's Hit: The Third Case",
    poster: "./img-src/answer30.jpg",
  },
  {
    src: "./img-src/image31.png",
    name: "Saripodhaa Sanivaaram",
    poster: "./img-src/answer31.jpg",
  },
  {
    src: "./img-src/image32.png",
    name: "Hanu-Man",
    poster: "./img-src/answer32.jpg",
  },
  {
    src: "./img-src/image33.png",
    name: "Mard Ko Dard Nahi Hota",
    poster: "./img-src/answer33.jpg",
  },
  {
    src: "./img-src/image34.png",
    name: "Srikanth",
    poster: "./img-src/answer34.jpg",
  },
  {
    src: "./img-src/image35.png",
    name: "Hi Nanna",
    poster: "./img-src/answer35.jpg",
  },
];

let currentFrameIndex = 0;
let isAnswerShown = false;

const imageCache = {};

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

function showAnswer() {
  const movieFrame = document.getElementById("movie-frame");
  if (!isAnswerShown) {
    movieFrame.src = frames[currentFrameIndex].poster;
    isAnswerShown = true;
  }
}

function nextFrame() {
  if (currentFrameIndex === frames.length - 1) {
    document.getElementById("game-container").classList.add("hidden");
    showFinalScores();
  } else {
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

function showFinalScores() {
  const players = ["shubham", "suraj", "yogi", "bhurani"]; // Updated player list
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

function restartGame() {
  window.location.href = "index.html";
}

window.onload = () => {
  preloadImages();
  resetScores();
};

function resetScores() {
  ["shubham", "suraj", "yogi", "bhurani"].forEach((player) => {
    // Updated player list
    localStorage.setItem(`score-${player}`, "0");
    document.getElementById(`score-${player}`).textContent = "0";
  });
}

function updateScore(player, change) {
  let score = parseInt(localStorage.getItem(`score-${player}`) || "0") + change;
  score = Math.max(0, score);
  localStorage.setItem(`score-${player}`, score);
  document.getElementById(`score-${player}`).textContent = score;
}

window.onload = () => {
  preloadImages();
  resetScores();
};