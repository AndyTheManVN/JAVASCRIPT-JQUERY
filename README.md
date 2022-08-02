# JQUERY - VIẾT CÂU LỆNH QUERT NGẮN GỌN CHO JAVASCRIPT

**Note:**  Phân biệt chữ Hoa, chữ thường


>1. Library giống như bootstrap dùng cho CSS, dùng viết gọn câu lệnh query javascript.

>2. ADD CDN LINK: <br>
	– Google CDN: ```<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>``` <br>
	– https://developers.google.com/speed/libraries#jquery  <br>

>3. MANIPULATE WITH JQUERY SYNTAX:  <br>
	- Query element/node hmtl:  <br>
		```$("h1")``` <br>
	- Manipulate css:  <br>
		```$("h1").css("color","green")``` <br>
	- Manipulate content: <br>
		```
		$("h1").text("change text")
		$("h1").html("change text html")
		``` <br>
	- Manipulate attribute: <br>
		```
		$("img").attr("src") <br>
		$("img").attr("src", "images/new.png") <br>
		```
	- EventListener: <br>
		```
		Recommend: **$("TAG-NAME").click(function(){})** <br>
		Cách dùng thay thế: $("tag").on("JS-event", function{}) <br>
		JS-event: use javascript event. <br>
		```

>4. ADD/REMOVE ELEMENT: <br>
	- Add element: <br>
		```
		- $("img").before("<button>Button before</button>");
		          .after
		          .prepend
		          .append
		``` <br>
	- Remove element: <br>
		```.remove()```  <br>

>5. ANIMATION: <br>
	- HIDE/SHOW - TOGGLE()/fadtoggle() <br>
	- Slideup  <br>
	- Slidedown <br>
	- SlideToggle(): $("h1").slideToggle(); <br>
	- animate() <br>



