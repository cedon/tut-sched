$(document).ready(function() {

   // Progressive Functionality Block
   $('.no-script').remove();
   $('#navlinks .button a').attr('href', '#');
   $('#schednav #navlinks').append('<li id="showall_button" class="button"><a role="button" class="bttn" href="#">Show All</a></li>');

   // Link Parsing
   $("a[href$='.pdf']").after("<img src='_img/icon-pdf.png' class='fileicon' alt='PDF' title='PDF File' width='16' height='16' />");
   $("a[href$='.doc']").after("<img src='_img/icon-word.png' class='fileicon' alt='Word' title='Microsoft Word File' width='16' height='16' />");
   $("a[href$='.docx']").after("<img src='_img/icon-word.png' class='fileicon' alt='Word' title='Microsoft Word File' width='16' height='16' />");

   //Show All Button Functionality
   $("#showall_button").click(function()  {
      $("div.schedsubject").show();
      $(".toplink").show();
   });

   // Makes the Dynamic Schedule Buttons work
   $(".button").not("#showall_button").click(function()  {
      subject = $(this).attr('id');
      subject = subject.replace('_button', '');
      $(".toplink").fadeOut();
      $("#"+subject).fadeIn();
      $("div.schedsubject").not("#"+subject).fadeOut();
      $('html, body').animate({scrollTop: $("#"+subject).offset().top}, 5);
   });
});