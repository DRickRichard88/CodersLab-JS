/**
 * Created by Jacek on 2016-01-12.
//  */
// ## Ćwiczenie 2 
// W pliku znajduje się kilka przycisków (są to odpowiednio postylowane linki). 
// Po klikniękiu w którykolwiek z nich jego rodzic ma zmienić kolor tła (na losowy).
// Rozwiązanie musi spełniać następujące założenia:
// 1. Na wszystkie przyciski musi być założony ten sam event.
// 2. Rodzic ma być wyszukiwany zależnie od położenia ```this```.
// 3. Kolor tła musi być losowy.

// Hint:
// Żeby uzyskać losowy kolor, użyj poniższego kodu:
// ```
// var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
window.addEventListener('DOMContentLoaded', function(){
	
	var buttons = document.querySelectorAll('.button');
	for(var i = 0; i <buttons.length; i++) {
		buttons[i].addEventListener('click',function(){
			console.log(this)
			var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
			this.parentElement.style.backgroundColor = randomColor;
		})
	}
});