/**
 * Created by Jacek & JK
 */
//## Ćwiczenie 7
//Na stronie znajdują się zagnieżdżone elmenty. Do każdego dopisane są eventy. Użyj metod ```stopPropagagation``` i ```stopImidiatePropagation``` w taki sposób, aby:
//1. Wywoływały się eventy dla elementu 1 i 2 a nie wywoływał się event dla elementu 3,
//  2. Wywoływały się wszystkie eventy dla elementu 4 i pierwszy event dla elementu 5.

document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('#element1').addEventListener('click', function(e){
		console.log('Event in #element1 fired!');
	});
	
	document.querySelector('#element2').addEventListener('click', function(e){
		console.log('Event in #element2 fired!');
	});
	
	document.querySelector('#element3').addEventListener('click', function(e){
		console.log('Event in #element3 fired!');
	});
	
	document.querySelector('#element4').addEventListener('click', function(e){
		console.log('Event in #element4 fired!');
	});
	
	document.querySelector('#element5').addEventListener('click', function(e){
		console.log('Event in #element5 fired!');
	});
});