// css
$("h1").css("color","green")

// Hmtl text - content manipulate
$("h1").html("Goodbye")

// Manipulate element attribute
$("a").attr("href","https://www.bing.com")

// EventListener 
 $(document).keypress(function(event){
    alert(event.key);
  });

  $("h1").click(function(e){
    $("h1").text("k");
  });

  $("h1").mouseover(function(e){
    $("h1").css("color","red");
  });

//   ADD ELEMENT
$("img").after("<button id='btnbefore'>Button before</button>");

// REMOVE ELEMENT
$("a").remove()

//ANIMATION
$("#btn1").click(function(){
    $("img").toggle();
    $("#btnbefore").remove();
});

$(".btn2").click(function(){
  $("h1").slideToggle();
});

$(".btn3").click(function(){
  $("p").slideUp().slideDown().animate({opacity:0.5});
});


