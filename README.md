# JQUERY - VIẾT CÂU LỆNH NGẮN GỌN CHO JAVASCRIPT

**Note:**  Phân biệt chữ Hoa, chữ thường


>1. Library giống như bootstrap dùng cho CSS, dùng viết gọn câu lệnh query javascript.

>2. ADD CDN LINK:
	– Google CDN: 
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	– Tài liệu: https://developers.google.com/speed/libraries#jquery

>3. MANIPULATE WITH JQUERY SYNTAX:
	a. Query element/node hmtl: 
		$("h1")
	b. Manipulate css: 
		$("h1").css("color","green")
	c. Manipulate content:  
		$("h1").text("change text")
		$("h1").html("change text html")
	d. Manipulate attribute: 
		$("img").attr("src")
		$("img").attr("src", "images/new.png")
	e. EventListener
		Recommend: **$("TAG-NAME").click(function(){})**
		Cách dùng thay thế: $("tag").on("JS-event", function{})
		JS-event: use javascript event.

>4. ADD/REMOVE ELEMENT:
	a. Add element:
		- $("img").before("<button>Button before</button>");
		- .after
		- .prepend
		- .append
	b. Remove element:
		- .remove() 

>5. ANIMATION:
	- HIDE/SHOW - TOGGLE()/fadtoggle()
	- Slideup 
	- Slidedown
	- SlideToggle(): $("h1").slideToggle();
	- animate()



