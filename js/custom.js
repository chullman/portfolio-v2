window.onload = init;

function init() {

  document.getElementById("main-container").onclick = showOrHideNavDropdown;

  waveLineDelay();
}

// Source referred to for help with the following onclick event handler function: https://stackoverflow.com/a/36695562
function showOrHideNavDropdown(e) {
  var hamburgerButton = document.getElementById("nav-hamburger-custom");
  var hamburgerDropdown = document.getElementById("hamburger-dropdown");
  // Check if the user clicks anywhere on the page except for the hamburger button, or one of the P links in the link dropdown box,
  // and if so, hide the dropdown box
  if (e.target != hamburgerButton) {
    // This should be a "for" or "forEach" loop for each anchor tag (i.e. link in the dropdown), but I don't know how yet - Chris Hullman
    if (e.target != document.getElementById("dropdown-content-container").getElementsByTagName("a")[0] &&
        e.target != document.getElementById("dropdown-content-container").getElementsByTagName("a")[1] &&
        e.target != document.getElementById("dropdown-content-container").getElementsByTagName("a")[2] &&
        e.target != document.getElementById("dropdown-content-container").getElementsByTagName("a")[3] &&
        e.target != document.getElementById("dropdown-content-container").getElementsByTagName("a")[4] &&
        e.target != document.getElementById("dropdown-content-container").getElementsByTagName("a")[5]) {
            hamburgerDropdown.style.display = "";
        }
    // Else if the user clicks on the hamburger button, show or hide the link dropdown box depending on whether it's currently displaying or not
  } else if (e.target == hamburgerButton) {
        if (hamburgerDropdown.style.display == "") {
            hamburgerDropdown.style.display = "block";
        } else {
            hamburgerDropdown.style.display = "";
        }
  }
}

// Adds an increasingly longer animation delay for every wave line, left to right, in the jumbotron section on Home Page, to simulate a "wave" effect
// With reference from https://codepen.io/shane-clarke/pen/poNeeGg for help with this

function waveLineDelay() {
  var delay = 0.2;
  var allWaveLines = document.getElementsByClassName("wave-line");
  var waveLine = null;

  // For every wave line that exists, from left to right, add a higher delay value to the value of the previous line
  for (var i = 0; i < allWaveLines.length; i++) {
    waveLine = allWaveLines[i];
    waveLine.style.animationDelay = delay + "s";
    delay = delay + 0.2;
  }
}
