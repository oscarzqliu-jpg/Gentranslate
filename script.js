document.addEventListener("DOMContentLoaded", function () {

  const slangDictionary = {
    lowkey: {
      meaning: "Secretly or mildly",
      tone: "Casual",
      example: "I lowkey like that song.",
      parent: "I kind of like that song."
    },
    w: {
      meaning: "A win or success",
      tone: "Positive",
      example: "That’s a W.",
      parent: "That is a success."
    },
    bruh: {
      meaning: "Expression of disbelief or frustration",
      tone: "Casual",
      example: "Bruh, no way.",
      parent: "I can’t believe that."
    },
    ick: {
      meaning: "A sudden feeling of disgust or disinterest",
      tone: "Negative",
      example: "That gave me the ick.",
      parent: "That made me uncomfortable."
    },
    slay: {
      meaning: "Doing something very well",
      tone: "Positive",
      example: "She slayed that presentation.",
      parent: "She did an excellent job."
    },
    bussin: {
      meaning: "Extremely good (usually food)",
      tone: "Positive",
      example: "This pizza is bussin.",
      parent: "This food tastes very good."
    },
    mid: {
      meaning: "Average or unimpressive",
      tone: "Judgmental",
      example: "That movie was mid.",
      parent: "That movie was not very good."
    },
    sus: {
      meaning: "Suspicious or questionable",
      tone: "Casual",
      example: "That sounds kinda sus.",
      parent: "That sounds suspicious."
    },
    aura: {
      meaning: "The cool, confident factor or vibe someone gives off",
      tone: "Casual",
      example: "That guy got aura.",
      parent: "That guy is cool."
    },
    rizz: {
      meaning: "Charisma or charm",
      tone: "Casual",
      example: "He’s got rizz.",
      parent: "He is very charming."
    },
    cap: {
      meaning: "A lie or something untrue",
      tone: "Casual",
      example: "That’s cap.",
      parent: "That is not true."
    },
    npc: {
      meaning: "Someone who lacks originality",
      tone: "Insulting",
      example: "Bro is an NPC.",
      parent: "They are acting very predictable."
    }
  };

  window.translateSlang = function () {
    const input = document.getElementById("slangInput").value
      .toLowerCase()
      .trim();

    const resultDiv = document.getElementById("result");

    if (!input) {
      resultDiv.innerHTML = "Please enter a word.";
      return;
    }

    if (slangDictionary[input]) {
      const word = slangDictionary[input];
      resultDiv.innerHTML = `
        <h3>${input}</h3>
        <p><strong>Meaning:</strong> ${word.meaning}</p>
        <p><strong>Tone:</strong> ${word.tone}</p>
        <p><strong>Example:</strong> ${word.example}</p>
        <p><strong>Parent Translation:</strong> ${word.parent}</p>
      `;
    } else {
      resultDiv.innerHTML = "Slang not found. Try another word.";
    }
  };

  // ENTER key support
  document.getElementById("slangInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      translateSlang();
    }
  });

  // Populate slang list
  const slangList = document.getElementById("slangList");

  Object.keys(slangDictionary).forEach(word => {
    const li = document.createElement("li");
    li.textContent = word;
    slangList.appendChild(li);
  });

});

function toggleMode() {
  const body = document.body;
  const button = document.querySelector(".mode-toggle");

  body.classList.toggle("dark");

  button.textContent = body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
}
 