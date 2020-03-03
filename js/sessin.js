$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});


let boxWidth = $("#colors-options").outerWidth();

$("#options i").click(function(){
    if($("#options").css("left")=='0px'){
        $("#options").animate({left:`-${boxWidth}`},700)
    }
    else{
        $("#options").animate({left:`0px`},700)
    }
})
let lis =$ ("#options ul li");

for(let i =0 ; i<lis.length; i++){
    let x =Math.round(Math.random()*254)
    let y =Math.round(Math.random()*254)
    let z =Math.round(Math.random()*254)
lis.eq(i).css("backgroundColor",`rgb(${x},${y},${z})`)
}
lis.click(function(){
    let color =$(this).css("backgroundColor");
    $("h1,h2,h3,h4,h5,h6,p").css("color",color)
})




// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1200, function(){
     
          window.location.hash = hash;
        });
      } 
    });
  });
  