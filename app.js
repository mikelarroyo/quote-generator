import { getRandomQuote } from './quotes.js';

document.addEventListener('DOMContentLoaded', () => {
  const quoteDisplay = document.getElementById('quote-display');
  const generateButton = document.getElementById('generate-button');

  quoteDisplay.textContent = getRandomQuote();

  generateButton.addEventListener('click', () => {
    quoteDisplay.textContent = getRandomQuote();
  });
});
