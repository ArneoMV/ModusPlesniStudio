// NAVIGATION
$(document).ready(function() {

 $("#main").load("html/Home.html");

 // ActivitiesContent Navigacija
 function navbarLinks(navigateTo) {
   let navbarLinksID = [".nav-home",".nav-onama", ".nav-plesovi", ".nav-vijesti", ".nav-kontakt"];
 
   for (let index = 0; index < navbarLinksID.length; index++) {
     if (navigateTo == navbarLinksID[index]) {
       $(navigateTo).addClass("link_active");
     }
     else{
       $(navbarLinksID[index]).removeClass("link_active");
     }
   }
 }
 
   $('.nav-home').click(function() { 
     $("#main").load("html/Home.html");
     navbarLinks(".nav-home");
   });
 
   $('.nav-onama').click(function() {  
     $('#main').load("html/Onama.html");
     navbarLinks(".nav-onama");
   });
 
   $('.nav-plesovi').click(function() {  
     $('#main').load("html/Plesovi.html");  
     navbarLinks(".nav-plesovi");
   });
 
   $('.nav-vijesti').click(function(){  
     $('#main').load("html/Vijesti.html");  
     navbarLinks(".nav-vijesti");
   });
 
   $('.nav-kontakt').click(function(){  
     $('#main').load("html/Kontakt.html");  
     navbarLinks(".nav-kontakt");
   });
 });