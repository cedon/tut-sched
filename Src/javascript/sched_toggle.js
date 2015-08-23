var d;
var theButtons = document.getElementsByClassName("button");

function bttnToggle() {
    var regEx = '_button';
    var theTargetId = this.id.replace(regEx, '');
    for (d=0; d < theSubjectDivs.length; d++) {
        if (theSubjectDivs[d].id === theTargetId) {
            theSubjectDivs[d].style.display = "block";
            theSubjectDivs[d].style.clear = "both";
            theSubjectDivs[d].setAttribute("aria-hidden", "false");
        } else if (theTargetId === "showall") {
            for (i=0; i < theSubjectDivs.length; i++) {
                theSubjectDivs[d].style.removeProperty("clear");
                theSubjectDivs[i].style.display = "block";
                theSubjectDivs[d].setAttribute("aria-hidden", "false");
            }
            theNextSibling.style.clear = "both";
        } else {
            theSubjectDivs[d].style.display = "none";
            theSubjectDivs[d].style.removeProperty("clear");
            theSubjectDivs[d].setAttribute("aria-hidden", "true");
        }
    }
}

for (i=0; i < theButtons.length; i++) {
    theButtons[i].addEventListener('click', bttnToggle, false);
}