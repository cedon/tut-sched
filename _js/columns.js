// JavaScript Document
$(document).ready(function() {
   // Make menu in columns since IE versions older than 10 don't support it
   $(".two-cols").columnize({ columns: 2 });
   $(".three-cols").columnize({ columns: 3 });
});