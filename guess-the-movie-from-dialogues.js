const dialogues = [
  {
    text: `"ओके बच्चालोग, ठीक से पढनेका, टीचर को तंग नहीं करने का, जो भी टीचर को तंग किया, उसको अंदर करेगा में, कुल्फ़ीवाला है में"`,
    name: "Simmba",
  },
  {
    text: `"कर देना मेरे नाम का गालियों में शुमार,\n अगर इन आँखों के वादों से मुकर जाऊं,\n मम्मी कसम जायेगी तो तू ही छोड़के जायेगी."`,
    name: "Tu Jhoothi Main Makkaar",
  },
  {
    text: `"शादी के बेसिक कॉन्सेप्ट में ही झोल है,\n इसीलिए 5-6 बार करने से अच्छा है, की शादी करो ही मत."`,
    name: "Yeh Jawaani Hai Deewani",
  },
  {
    text: `"में तो कहता हु, यह ध "मन-टैली सिक" हो चूका है,\n और उसे थे "साइकियाट्रिक" की जरूरत है."`,
    name: "Zindagi Na Milegi Doobara",
  },
  {
    text: `"अब्बे साले वहां से यहाँ आते आते गांड फट गयी है,\n और तेरेको पहाड़ चढ़ना हैं??"`,
    name: "Go Goa Gone",
  },
  {
    text: `"ओह ऐसी अफवाह फैलाना भी मत,\n पता चला पूरा सहर साडी पहन के घूम रहा है,\n "मेरा पिया घर आया ओह राम जी" टाइप्स."`,
    name: "Stree",
  },
  {
    text: `"मुझे शुरू से यह बन्दा पसंद नहीं,\n लेकिन जो हाथ तेरी मांग में सिन्दूर भरेगा,\n उसकी हर लकीर पहले में चेक करूँगा."`,
    name: "Animal",
  },
  {
    text: `"मेरी हालत किसी गंजे के सर पे बिच्छू रेंग रहा हो वेसी है, चल गोपी बच्चो को भी बैग में ठूस ले और निकल ले,\n तू चुपकर नहीं तो खिंच कर दूंगा, साला यहाँ में जलते तवे पर बैठा हूँ और तू कहता है पिछवाडा मत उछालो."`,
    name: "Hulchul",
  },
  {
    text: `"ऐसे कैसे अंगूठी उतार देगी?\n मेरी बेटी कोई बियर की बाटली नहीं है, की जब चाहे उसका लेबल उतार दो."`,
    name: "Hungama",
  },
  {
    text: `"उस दिन में चुप बैठा था पता है क्यों?\n "बावर्ची" हिट हुई थी पता है?\n उसका रीमेक कर करके कितने लोग "हीरो नं. 1" हुए हैं."`,
    name: "Golmaal Fun Unlimited",
  },
  {
    text: `"में कोई बोतल से निकला हुआ भूत हूँ? की एक के बाद एक काम देते ही जा रहे हो?"`,
    name: "Chup Chup Ke",
  },
  {
    text: `"अब्बे ओ बिना पेड़ के फल, सुसाइड करना है तो सीधा टपकना या में टपकाउ?,\nजूता फेंककर क्या गहराई नाप रहा है?,\n अब तू क्यों हाथ में पकडे खड़ा हैं? पानी में फेंक दे."`,
    name: "Welcome",
  },
  {
    text: `"क्या हुआ?\n टायर फटा? \nनही कोई पीटा,\n कोन पीटा?"`,
    name: "Mujhse Shaadi Karogi",
  },
  {
    text: `"तू क्यों रो रहा है तेरी माँ मर गयी पेपर में?\n शिल्पा शेट्टी का लगन हो गया भाऊ, \nतो हम लोग क्यों रोये? वह उसकी तक़दीर है तू काम कर."`,
    name: "Khatta Meetha",
  },
  {
    text: `"माँ बाप का दुआ, बद्दुआ सबको तथास्तु बोलता है वोह.\n यह तुमने कहा, में नहीं सुना,\nसोचा आएगी, सॉरी बोलेगी में माफ़ कर दूंगा."`,
    name: "Sanam Teri Kasam",
  },
];

let currentDialogueIndex = 0;
const players = ["suraj", "yogi"];
const gameType = "guess-dialogue";
localStorage.setItem("currentGame", gameType);

function showAnswer() {
  document.getElementById("answer").classList.remove("hidden");
  document.getElementById("movie-name").textContent =
    dialogues[currentDialogueIndex].name;
}

function nextDialogue() {
  if (currentDialogueIndex === dialogues.length - 1) {
    document.getElementById("game-container").classList.add("hidden");
    document.getElementById("scoreboard").classList.add("hidden");
    showFinalScores();
  } else {
    currentDialogueIndex++;
    if (currentDialogueIndex < dialogues.length) {
      document.getElementById("dialogue-box").innerHTML = dialogues[
        currentDialogueIndex
      ].text.replace(/\n/g, "<br>");
      document.getElementById("answer").classList.add("hidden");
      if (currentDialogueIndex === dialogues.length - 1) {
        document.getElementById("next-dialogue-btn").textContent = "View Score";
      }
    }
  }
}

function initializeScores() {
  players.forEach((player) => {
    let key = `score-${gameType}-${player}`;
    localStorage.setItem(key, "0");
    document.getElementById(`score-${player}`).textContent = "0";
  });
}

function updateScore(player, change) {
  let key = `score-${gameType}-${player}`;
  let score = parseInt(localStorage.getItem(key)) || 0;
  score = Math.max(0, score + change);
  localStorage.setItem(key, score);
  document.getElementById(`score-${player}`).textContent = score;
}

function showFinalScores() {
  const scoreTableBody = document.getElementById("score-table-body");
  scoreTableBody.innerHTML = "";
  players
    .map((player) => ({
      name: player,
      score: parseInt(localStorage.getItem(`score-${gameType}-${player}`)) || 0,
    }))
    .sort((a, b) => b.score - a.score)
    .forEach((player) => {
      scoreTableBody.innerHTML += `<tr><td>${
        player.name.charAt(0).toUpperCase() + player.name.slice(1)
      }</td><td>${player.score}</td></tr>`;
    });
  document.getElementById("final-scoreboard").classList.remove("hidden");
}

function goToHomepage() {
  players.forEach((player) =>
    localStorage.setItem(`score-${gameType}-${player}`, "0")
  );
  window.location.href = "index.html";
}

window.onload = () => {
  initializeScores();
};
