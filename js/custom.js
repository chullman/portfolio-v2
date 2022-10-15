window.onload = init;

// On window load, that is, when the DOM is created, because we're calling the .JS file each HTML files' head element...
function init() {
  // Assign the showOrHideNavDropdown function event handler to the onclick listener
  // This function will be used on mobile devices for the "hamburger" nav icon and links dropdown
  // to check if the user clicks anywhere outside of the "hamburger" icon OR outside of the dropdown box
  // to close the dropdown box if it's open
  document.getElementById("main-container").onclick = showOrHideNavDropdown;

  // For the Home Page's jumbotron "blue wave" animation
  // (see function below for more details)
  waveLineDelay();

  // Update the copyright year number on the footer to the current year
  document.getElementById("copyright-year").textContent = getCurrentYear();
}

// Source referred to for help with the following onclick event handler function: https://stackoverflow.com/a/36695562
function showOrHideNavDropdown(e) {

  const swapHamburgerIcon = function(iconFrom, iconTo) {
      hamburgerButton.classList.remove(iconFrom);
      hamburgerButton.classList.add(iconTo);
  }

  var hamburgerButton = document.getElementById("nav-hamburger-custom");
  var hamburgerLinksText = document.getElementById("nav-hamburger-links-text");
  var hamburgerDropdown = document.getElementById("hamburger-dropdown");

  // Check if the user clicks anywhere on the page except for the hamburger button or the above "links:" text
  // e = click event
  if ((e.target != hamburgerButton) && (e.target != hamburgerLinksText)) {
    // If this is the case, check if the user clicked on an anchor link in the dropdown box
    // We'll use a boolean to raise a flag if true
    var didUserClickOnALink = false;

    // Get all anchor tag links to other HTML pages in the dropdown
    var allDropdownLinks = document.getElementById("dropdown-content-container").getElementsByTagName("a");

    for (var i = 0; i <= allDropdownLinks.length; i++) {
      // For every link in the dropdown, check if the user clicked on any one of them, and if so, raise our boolean flag to true
      if (e.target == allDropdownLinks[i]) {
        didUserClickOnALink = true;
      }
    }

    // Other if our boolean flag is still false, this means the user clicked outside of the nav dropdown box, so close it
    if (didUserClickOnALink == false) {
      // I DON'T KNOW WHY, but display has to be set to "" and not "none", to hide the dropdown box
      // I still don't know why this is this is case as of writing this comment (14/03/2022)
      hamburgerDropdown.style.display = "";
      swapHamburgerIcon("fa-rectangle-xmark", "fa-bars");
    }

    // Else if the user clicks on the hamburger button or the above "links:" text, show or hide the link dropdown box depending on whether it's currently displaying or not
  } else if (e.target == hamburgerButton || e.target == hamburgerLinksText) {
    if (hamburgerDropdown.style.display == "") {
      hamburgerDropdown.style.display = "block";
      swapHamburgerIcon("fa-bars", "fa-rectangle-xmark");
      hamburgerDropdown.style.animationName = "hamburger-dropdown-fade-in";
      hamburgerDropdown.style.animationDuration = "0.5s";
    } else {
      hamburgerDropdown.style.display = "";
      swapHamburgerIcon("fa-rectangle-xmark", "fa-bars");
    }
  }

}

// Adds an increasingly longer animation delay for every wave line, left to right, in the jumbotron section on Home Page, to simulate a "wave" effect
// With reference from https://codepen.io/shane-clarke/pen/poNeeGg for help with this

function waveLineDelay() {
  var delay = 0.2;
  var allWaveLines = document.getElementsByClassName("wave-line");
  var waveLine = null;

  // For every vertical wave line that exists, from left to right, add a higher delay value to the value of its previous line
  for (var i = 0; i < allWaveLines.length; i++) {
    waveLine = allWaveLines[i];
    waveLine.style.animationDelay = delay + "s";
    delay = delay + 0.2;
  }
}

function getCurrentYear() {
  return new Date().getFullYear();
}
