window.onload = function () {
  // Select all elements with the class "random-element"
  const elements = document.querySelectorAll(".page");

  // Iterate over each element and assign random left and top CSS properties
  elements.forEach(function (element) {
    const left = Math.floor(Math.random() * 71) + 10; // Random left position
    const top = Math.floor(Math.random() * 71) + 10; // Random top position

    // Set the left and top CSS properties
    element.style.left = left + "vw";
    element.style.top = top + "vh";
  });
};

function showDoc() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";

    // Display the Google Document in the iframe
    const docFrame = document.getElementById("docFrame");
    docFrame.src = "###REDACTED###";
}
function closeFrame() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}