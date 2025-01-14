// Funktion, um Text vorlesen zu lassen
function readText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

// Event-Listener für das Überfahren von Artikeln mit der Maus
document.querySelectorAll('.article').forEach(article => {
  article.addEventListener('mouseenter', function() {
    const text = article.innerText; // Den gesamten Text des Artikels bekommen
    readText(text);
  });

  // Wenn der Mauszeiger den Artikel verlässt, stoppe die Sprachausgabe
  article.addEventListener('mouseleave', function() {
    speechSynthesis.cancel(); // Stoppt die Sprachausgabe
  });
});
