const memes = [
    "When you fix a bug but 10 new ones appear 😂😆",
    "404: Brain not found 🧠❌",
    "Why do programmers hate nature? It has too many bugs! 🐛",
    "Debugging is like being the detective in a crime movie where you are also the murderer 🕵️‍♂️",
    "JavaScript: Where `0 == '0'` but `0 === '0'` is false. 🤯",
    "Stack Overflow is my co-pilot 🚀",
    "Ctrl + C, Ctrl + V: The true developer workflow 😆",
    "npm install && hope for the best 🤞😂😆"
  ];
  
  
  function getRandomMeme() {
    return memes[Math.floor(Math.random() * memes.length)];
  }
  
  module.exports = getRandomMeme;
  