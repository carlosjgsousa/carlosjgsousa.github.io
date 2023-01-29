document.addEventListener("DOMContentLoaded", function () {
  var sr = ScrollReveal();
  sr.reveal('.reveal', {easing: 'ease-in-out', distance: '20px', scale: 1, delay: 0, mobile: false, useDelay: 'onload'});
  
  const words = ["Olá", "Hello", "Hola", "Ciao", "你好", "Bonjour", "Hallo", "こんにちは"];

  // index to keep track of current word
let currentWordIndex = 0;

// function to change the word
function changeWord() {
  // get the current word element
  const currentWord = document.querySelector('.current-word');

  // remove the current class and add the fade-out class
  currentWord.classList.remove('current-word');
  currentWord.classList.add('fade-out');

  // update the current word index
  currentWordIndex = (currentWordIndex + 1) % words.length;

  // update the text content and add the current class after a short delay
  setTimeout(() => {
    currentWord.textContent = words[currentWordIndex];
    currentWord.classList.add('fade-in');
  }, 500);

  // remove the fade-out class and add the current class after the animation is complete
  setTimeout(() => {
    currentWord.classList.remove('fade-out');
    currentWord.classList.add('current-word');
    currentWord.classList.remove('fade-in');
  }, 1000);
}

// call the changeWord function every 3 seconds
setInterval(changeWord, 5000);

// function to calculate reading time
function calculateReadingTime(text) {
  // average reading speed is around 200-300 words per minute
  const wordsPerMinute = 250;
  // split the text into an array of words
  const wordCount = text.split(' ').length;
  // calculate the reading time in minutes
  const readingTime = wordCount / wordsPerMinute;
  return Math.ceil(readingTime);
}

const articleTextEl = document.getElementById('article-text');
if(articleTextEl){
  // retrieve the text content of the element
  const articleText = articleTextEl.textContent;

  // get the reading time element
  const readingTimeEl = document.getElementById('reading-time');
  
  // calculate the reading time
  const readingTime = calculateReadingTime(articleText);
  
  // display the reading time in the reading time element
  readingTimeEl.textContent = `Reading time: ${readingTime} minutes`;
} else {
  //nothing
}
  
});