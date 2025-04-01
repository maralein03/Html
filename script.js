document.getElementById('funfact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Verhindert das Neuladen der Seite beim Absenden

  // Werte aus den Eingabefeldern holen
  var name = document.getElementById('name').value;
  var funfact = document.getElementById('funfact').value;

  // Ausgabe in der Konsole
  console.log('Name: ' + name + ', FunFact: ' + funfact);

  // Eingabefelder leeren, damit sie für die nächste Eingabe bereit sind
  document.getElementById('name').value = '';
  document.getElementById('funfact').value = '';
});
