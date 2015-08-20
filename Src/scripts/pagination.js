var theList = document.getElementById("navlinks");
var theListParentNode = theList.parentElement.nodeName;
var theListParentNodeId = theList.parentNode.getAttribute("id");
var theListParent = document.getElementById(theListParentNodeId);
var theListItems = theList.getElementsByTagName("li");
var listCount = theListItems.length;

// Assuming Two Columns
secColCount = Math.floor(listCount / 2);
firstColCount = listCount - secColCount;

console.log("The List's Parent is: " + theListParentNode);
console.log("The List's Parent ID is: " + theListParentNodeId);

console.log("First Column: " + firstColCount);
console.log("Second Column: " + secColCount);

// Remove the One-Column List from the DOM
theList.parentNode.removeChild(theList);

// Create the First Column and Populate It
var firstColDiv = document.createElement("div");
firstColDiv.id = "firstCol";
var firstColDivList = document.createElement("ul");


for (i = 0; i < firstColCount; i++) {
    var theNewItem = document.createElement("li");
    var theNewItemText = document.createTextNode(theListItems[i].innerHTML);
    theNewItem.appendChild(theNewItemText);
    firstColDivList.appendChild(theNewItem);
}
firstColDiv.appendChild(firstColDivList);
theListParent.appendChild(firstColDiv);

// Create the Second Column and Populate It
var secColDiv = document.createElement("div");
secColDiv.id = "secCol";
var secColDivList = document.createElement("ul");


for (i = listCount - (firstColCount - 1); i < listCount; i++) {
    var theNewItem = document.createElement("li");
    var theNewItemText = document.createTextNode(theListItems[i].innerHTML);
    theNewItem.appendChild(theNewItemText);
    secColDivList.appendChild(theNewItem);
}
secColDiv.appendChild(secColDivList);
theListParent.appendChild(secColDiv);