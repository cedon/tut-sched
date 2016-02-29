// Progressive Functionality
var i;

// Remove all elements with the class of "no-js"
var noscripts = document.getElementsByClassName("no-script");
for (i = 0; i < noscripts.length; i++) {
    noscripts[i].style.display = "none";
    noscripts[i].setAttribute("aria-hidden", "true");
}

// Create the "Show All" Button
var navList = document.getElementById("navlinks");
var newBttn = document.createElement("li");
newBttn.id = "showall_button";
newBttn.className = "bttn";

// Create Anchor Tag for "Show All Button"
var newBttnLink = document.createElement("a");
newBttnLink.setAttribute("href", "#navlinks");

// Create Text Node for "Show Button" Anchor Tag
var newBttnLinkText = document.createTextNode("Show All");

// Put it All Together
newBttnLink.appendChild(newBttnLinkText);
newBttn.appendChild(newBttnLink);
navList.appendChild(newBttn);

// Remove the "Top" links
var theTopLinks = document.getElementsByClassName("toplink");
for (i = 0; i < theTopLinks.length; i++) {
    theTopLinks[i].style.display = "none";
    theTopLinks[i].setAttribute("aria-hidden", "true");
}