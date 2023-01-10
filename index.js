let printMode = false;
const btn = document.getElementById("generate-btn");

function togglePrintMode() {
  printMode = !printMode;
  btn.textContent = printMode ? "Skriv ut" : "Klicka och generera";
}

function generateUI() {
  let html = "";
  let lowerLetters = [];

  for (var i = 97; i <= 122; i++) {
    lowerLetters.push(String.fromCharCode(i));
    if (String.fromCharCode(i) === "z") {
      lowerLetters.push("å", "ä", "ö");
      break;
    }
  }

  let upperLetters = lowerLetters.map((letter) => letter.toUpperCase());
  let numbers = Array.from({ length: 10 }, (_, i) => i);
  let combinedArray = [].concat(lowerLetters, upperLetters, numbers);

  combinedArray.forEach(function (element) {
    html += "<h2>" + element + "</h2>";
  });

  document.getElementById("output").innerHTML = html;
  togglePrintMode();
}

function printUI() {
  if (printMode) {
    window.print();
  } else {
    generateUI();
  }
}

btn.addEventListener("click", printUI);
