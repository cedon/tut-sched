var buttonLinks = document.querySelectorAll('.button a');
var subjectDivs = document.querySelectorAll('.schedsubject');
var theNewID,
    theID;

[].forEach.call( buttonLinks, function(el){
    el.setAttribute('href', '#');


    el.addEventListener('click', function() {
        [].forEach.call(subjectDivs, function(div) {
            theID = el.parentNode.getAttribute('id');
            var regEx = '_button';
            theNewID = theID.replace(regEx, '');
            subjectID = div.getAttribute('id');
            if (subjectID == theNewID) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
    }, false);
});

[].forEach.call(buttonLinks, function(el) {
    el.addEventListener('click', function() {
        [].forEach.call(subjectDivs, function(div) {
            theID = el.parentNode.getAttribute('id');
            var regEx = '_button';
            theNewID = theID.replace(regEx, '');
            subjectID = div.getAttribute('id');
            if (subjectID == theNewID) {
                div.setAttribute("aria-hidden", "false");
            } else {
                div.setAttribute("aria-hidden", "true");
            }
        });
    }, false);
});