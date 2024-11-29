function checkAnswer() {
  const options = document.getElementsByName('threat');
  let selectedAnswer = null;

  // Find selected answer
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedAnswer = options[i].value;
      break;
    }
  }

  // Check answer and display result
  const result = document.getElementById('result');
  if (selectedAnswer === "Firewall") {
    result.textContent = "Correct! A firewall is not a threat, it's a protective system.";
    result.style.color = "green";
  } else {
    result.textContent = "Incorrect! A firewall is a security system, not a threat.";
    result.style.color = "red";
  }
}
