document.addEventListener("DOMContentLoaded", function () {
  const signalBox = document.getElementById("signal-box");

  fetch("https://a5-pump-backend.vercel.app/signals")
    .then((response) => response.json())
    .then((data) => {
      signalBox.innerHTML = `<strong>Signal:</strong> ${data.message}`;
    })
    .catch((error) => {
      console.error("Error fetching signal:", error);
      signalBox.innerHTML = "❌ Error loading signals. Please try again later.";
    });
});
