// Progressive Functionality
var i;

    // Remove all elements with the class of "no-js"
    var noscripts = document.getElementsByClassName("no-script");
    for (i = 0; i < noscripts.length; i++) {
        noscripts[i].style.display = "none";
        console.log(noscripts[i]);
    }

    // Create the "Show All" Button
    var navList = document.getElementById("navlinks");
    var newBttn = document.createElement("li");
    newBttn.id = "showall_button";
    newBttn.className = "bttn";

    // Create Anchor Tag for "Show All Button"
    var newBttnLink = document.createElement("a");
    newBttnLink.setAttribute("href", "#");

    // Create Text Node for "Show Button" Anchor Tag
    var newBttnLinkText = document.createTextNode("Show All");

    // Put it All Together
    newBttnLink.appendChild(newBttnLinkText);
    newBttn.appendChild(newBttnLink);
    navList.appendChild(newBttn);