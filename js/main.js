$(document).ready(function(){
    $(".navbar-toggler, .overlay2").on("click", function(){
        $(".mobileMenu, .overlay2").toggleClass("open");
    })
});


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})





function myFunction() {
  document.getElementById("myDate").defaultValue = "09-09-1995";
}


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})