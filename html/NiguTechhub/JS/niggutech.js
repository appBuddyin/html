function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

$(document).ready(function(){
  $("#footerbutton2").hover(function(){
    $(this).css("background-color", "darkgrey");},
     function(){
      $(this).css("background-color", "black");
    });

    $("#footerbutton1").hover(function(){
      $(this).css("border","solid 2px black");},
      function(){
        $(this).css("border","solid 1px black");
    });

  });

