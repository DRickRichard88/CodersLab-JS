/**
 * Created by Jacek on 2016-01-12.
 */
// ## Ćwiczenie 1
// Na stronie przypisanej do zadania znajduje się lista i guzik.
// Musisz dopisać odpowiednie eventy do nich w taki sposób, żeby po 
// kliknięciu w guzik dodał się nowy element do listy.
// Element powinien mieć w sobie informacje na temat tego, 
// ile elementów jest w liście w chwili jego dodania.

document.addEventListener('DOMContentLoaded', function(){

var list = document.querySelector('.menu');
var button = document.querySelector('.button');

	button.addEventListener('click',function(event){

	var newLi =  document.createElement('li');
	var ulChildren = list.children.length;
	newLi.innerText = ulChildren + 1;
	// console.log(ulChildren);
	list.appendChild(newLi);			
	});

});