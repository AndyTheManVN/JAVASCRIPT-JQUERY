# JQUERY - VIẾT CÂU LỆNH QUERT NGẮN GỌN CHO JAVASCRIPT

**Note:**  Phân biệt chữ Hoa, chữ thường


>1. Library giống như bootstrap dùng cho CSS, dùng viết gọn câu lệnh query javascript.

>2. ADD CDN LINK:
	– Google CDN: ```<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>``` <br>
	– https://developers.google.com/speed/libraries#jquery

>3. MANIPULATE WITH JQUERY SYNTAX:
	- Query element/node hmtl: 
		```$("h1")```
	- Manipulate css: 
		```$("h1").css("color","green")```
	- Manipulate content:
		```
		$("h1").text("change text")
		$("h1").html("change text html")
		```
	- Manipulate attribute:
		```
		$("img").attr("src")
		$("img").attr("src", "images/new.png")
		```
	- EventListener:
		```
		Recommend: **$("TAG-NAME").click(function(){})**
		Cách dùng thay thế: $("tag").on("JS-event", function{})
		JS-event: use javascript event.
		```

>4. ADD/REMOVE ELEMENT:
	- Add element:
		```
		- $("img").before("<button>Button before</button>");
		          .after
		          .prepend
		          .append
		```
	- Remove element:
		```.remove()``` 

>5. ANIMATION:
	- HIDE/SHOW - TOGGLE()/fadtoggle()
	- Slideup 
	- Slidedown
	- SlideToggle(): $("h1").slideToggle();
	- animate()



