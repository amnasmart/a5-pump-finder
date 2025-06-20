document.addEventListener("DOMContentLoaded", function () {
  const signalBox = document.getElementById("signal-box");
  fetch("/signals")
    .then((response) => response.json())
    .then((data) => {
      signalBox.innerHTML = data.message;
    })
    .catch((error) => {
      signalBox.innerHTML = "Error loading signals.";
    });
});