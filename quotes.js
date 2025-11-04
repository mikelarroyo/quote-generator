// quotes.js
const quotes = [
  { text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", author: "John Lennon" },
  { text: "El único modo de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
  { text: "La innovación distingue a un líder de un seguidor.", author: "Steve Jobs" },
	{ text: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.", author: "Albert Schweitzer" },
	{ text: "Tu tiempo es limitado, no lo desperdicies viviendo la vida de otra persona.", author: "Steve Jobs" },
	{ text: "Solo hay una forma de evitar las críticas: no hagas nada, no digas nada, y no seas nada.", author: "Aristóteles" },

];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return `${quotes[randomIndex].text} - ${quotes[randomIndex].author}`;
}

export { quotes, getRandomQuote };
