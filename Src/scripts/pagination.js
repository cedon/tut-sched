var theList = document.getElementById("navlinks");
var theNextSibling = document.querySelector("#navlinks").parentNode.nextElementSibling;
var theListParentNode = theList.parentElement.nodeName;
var theListParentNodeId = theList.parentNode.getAttribute("id");
var theListParent = document.getElementById(theListParentNodeId);
var theListItems = theList.getElementsByTagName("li");
var theListItemLinks = theList.getElementsByTagName("a");
var listCount = theListItems.length;
var firstColCount, secColCount, i;

// Assuming Two Columns
if ( listCount % 2 == 1) {
    secColCount = Math.floor(listCount / 2);
    firstColCount = listCount - secColCount;
} else {
    firstColCount = listCount / 2;
    secColCount = listCount / 2;
}

// Remove the One-Column List from the DOM
theList.parentNode.removeChild(theList);

// Create the First Column and Populate It
var firstColDiv = document.createElement("div");
firstColDiv.id = "firstCol";
firstColDiv.style.float = "left";
firstColDiv.style.width = "50%";
var firstColDivList = document.createElement("ul");

for (i = 0; i < firstColCount; i++) {
    // Create the new li element
    var theNewItem = document.createElement("li");
    theNewItem.id = theListItemLinks[i].parentNode.getAttribute("id");
    theNewItem.className = "button";

    // Create the new a element
    var theNewItemLink = document.createElement("a");
    theNewItemLink.setAttribute("href", "#");

    //Create new text node
    var theNewItemText = document.createTextNode(theListItemLinks[i].innerHTML);

    // Link the new elements together
    theNewItemLink.appendChild(theNewItemText);
    theNewItem.appendChild(theNewItemLink);
    firstColDivList.appendChild(theNewItem);
}
firstColDiv.appendChild(firstColDivList);
theListParent.appendChild(firstColDiv);

// Create the Second Column and Populate It
var secColDiv = document.createElement("div");
secColDiv.id = "secCol";
var secColDivList = document.createElement("ul");


for (i = listCount - secColCount; i < listCount; i++) {
    // Create the new li element
    var theNewItem = document.createElement("li");
    theNewItem.id = theListItemLinks[i].parentNode.getAttribute("id");
    theNewItem.className = "button";

    // Create the new a element
    var theNewItemLink = document.createElement("a");
    theNewItemLink.setAttribute("href", "#");

    //Create new text node
    var theNewItemText = document.createTextNode(theListItemLinks[i].innerHTML);

    // Link the new elements together
    theNewItemLink.appendChild(theNewItemText);
    theNewItem.appendChild(theNewItemLink);
    secColDivList.appendChild(theNewItem);
}
secColDiv.appendChild(secColDivList);
theListParent.appendChild(secColDiv);

// Clear the next Div after columns
theNextSibling.style.clear = "both";