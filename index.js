let printMode = false;
const generateBtn = document.getElementById("generate-btn");
const printBtn = document.getElementById("print-btn");

function togglePrintMode()
{
  printMode = !printMode;
  generateBtn.textContent = printMode ? "Rensa" : "Klicka för att generera";
  printBtn.style.display = printMode ? "inline-block" : "none";
}

function generateUI()
{
  let html = "";
  let lowerLetters = [];

  for (var i = 97; i <= 122; i++)
  {
    lowerLetters.push(String.fromCharCode(i));
    if (String.fromCharCode(i) === "z")
    {
      lowerLetters.push("å", "ä", "ö");
      break;
    }
  }

  let upperLetters = lowerLetters.map(letter => letter.toUpperCase());
  let numbers = Array.from({ length: 10 }, (_, i) => i);
  let combinedArray = [].concat(lowerLetters, upperLetters, numbers);

  combinedArray.forEach(function (element)
  {
    html += "<h2>" + element + "</h2>";
  });

  document.getElementById("output").innerHTML = html;
  togglePrintMode();
}

function printUI(event)
{
  if (printMode)
  {
    if (event.target.id === "generate-btn" && generateBtn.textContent === "Rensa")
    {
      document.getElementById("output").innerHTML = "";
      togglePrintMode();
    } else
    {
      window.print();
    }
  } else
  {
    generateUI();
  }
}

generateBtn.addEventListener("click", printUI);
printBtn.addEventListener("click", printUI);
