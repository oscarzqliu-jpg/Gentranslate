document.addEventListener("DOMContentLoaded", () => {

  const slangDictionary = {
    fr: { meaning: "For real", tone: "Casual", example: "That test was hard fr.", parent: "That test was honestly difficult." },
    no_cap: { meaning: "No lie", tone: "Casual", example: "No cap, this slaps.", parent: "Honestly, this is great." },
    based: { meaning: "Confident opinion", tone: "Positive", example: "That take was based.", parent: "That opinion was strong." },
    lowkey: { meaning: "Secretly", tone: "Casual", example: "I lowkey like it.", parent: "I kind of like it." },
    rizz: { meaning: "Charm", tone: "Casual", example: "He has rizz.", parent: "He is charming." },
    mid: { meaning: "Average", tone: "Judgmental", example: "That movie was mid.", parent: "That movie was not impressive." },
    bussin: { meaning: "Very good", tone: "Positive", example: "This food is bussin.", parent: "This food tastes great." },
    sus: { meaning: "Suspicious", tone: "Casual", example: "That sounds sus.", parent: "That sounds suspicious." },
    slay: { meaning: "Did great", tone: "Positive", example: "You slayed.", parent: "You did an excellent job." },
    npc: { meaning: "Unoriginal person", tone: "Insulting", example: "He's an NPC.", parent: "They act predictably." },
    aura: { meaning: "Cool vibe", tone: "Casual", example: "He has aura.", parent: "He has confidence." }
  };

  const list = document.getElementById("slangList");

  Object.keys(slangDictionary).forEach(word => {
    const li = document.createElement("li");
    li.textContent = word;
    li.onclick = () => {
      document.getElementById("slangInput").value = word;
      translateSlang();
    };
    list.appendChild(li);
  });

  window.translateSlang = function () {
    const input = document.getElementById("slangInput").value.toLowerCase().trim();
    const result = document.getElementById("result");

    if (!slangDictionary[input]) {
      result.innerHTML = "Slang not found.";
      return;
    }

    const s = slangDictionary[input];
    result.innerHTML = `
      <h3>${input}</h3>
      <p><strong>Meaning:</strong> ${s.meaning}</p>
      <p><strong>Tone:</strong> ${s.tone}</p>
      <p><strong>Example:</strong> ${s.example}</p>
      <p><strong>Parent Translation:</strong> ${s.parent}</p>
    `;
  };
});

function toggleMode() {
  document.body.classList.toggle("dark");
}
