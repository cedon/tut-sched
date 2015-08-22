var theButtons = document.getElementsByClassName("button");
var theSubjectDivs = document.getElementsByClassName("schedsubject");

function bttnToggle() {
    var regEx = '_button';
    var theTargetId = this.id.replace(regEx, '');
    for (d=0; d < theSubjectDivs.length; d++) {
        if (theSubjectDivs[d].id === theTargetId) {
            theSubjectDivs[d].style.display = "block";
            theSubjectDivs[d].style.clear = "both";
            theSubjectDivs[d].setAttribute("aria-hidden", "false");
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