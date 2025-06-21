document.addEventListener("DOMContentLoaded", function () {
  const signalBox = document.getElementById("signal-box");
  fetch("https://a5-pump-backend.vercel.app/signals")
    .then((response) => response.json())
    .then((data) => {
      signalBox.innerHTML = data.message;
    })
    .catch((error) => {
      signalBox.innerHTML = "Error loading signals.";
    });
});
