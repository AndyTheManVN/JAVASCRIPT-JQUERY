// css
$("h1").css("color","green")

// Hmtl text - content manipulate
$("h1").html("Goodbye")
$("button").text("JQuery")

// Manipulate element attribute
$("a").attr("href","https://www.bing.com")

// EventListener 
 $(document).keypress(function(event){
    alert(event.key);
  });

  $("h1").click(function(e){
    $("h1").text("k");
  });