const btn = document.getElementById("btn");

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

  document.getElementById("interface").innerHTML = html;
  btn.style.visibility = "hidden";
}

btn.addEventListener("click", generateUI);
