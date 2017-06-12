/**
 * Created by Jacek on 2016-01-12.
 */

// ## Ćwiczenie 4
// Na stronie znajduje się lista z wpisami i guzik. Napisz taki event, żeby po kliknieciu
//  w guzik z listy zostały ununięte wszystkie jej dzieci.

document.addEventListener('DOMContentLoaded', function(){

	var button = document.querySelector('.button');
	var li = document.querySelectorAll('li');
	var parentLi = document.querySelector('li').parentElement;

	button.addEventListener('click', function(){
		var i = 0;
		console.log(parentLi)
		while (li.length > 0){
			parentLi.removeChild(li[i]);
			i++
		}
	});

});