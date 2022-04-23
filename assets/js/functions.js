$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});


var slideIndex = 1;
fullSlider(slideIndex);

function sliding(n) {
  fullSlider(slideIndex += n);
}

function fullSlider(n) {
  var i;
  var x = document.getElementsByClassName("active");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display="none";  
  }
  x[slideIndex-1].style.display = "block";  
}











