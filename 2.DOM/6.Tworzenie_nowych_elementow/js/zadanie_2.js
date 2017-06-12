/**
 * Created by Jacek on 2016-01-12.
//  */
// ## Ćwiczenie 2
// Na stronie znajduje się tablica z informacjami na temat zamówień (z dwoma już wprowazonymi zamówieniami).
// Poniżej znajduje się formularz do wypełnienia mowego zamówienia.
// Napisz event, który pobierze informacje z inputów (``` el.value ```) i wprowadzi nowy wpis do tabelki.
document.addEventListener('DOMContentLoaded',function(){

	var button = document.querySelector('.button');
	var table = document.querySelector('table');
	var trNew = document.createElement('tr');

	function addItems(txt) {
		var td = document.createElement('td');
		td.innerText = txt.value;
		trNew.appendChild(td);
	}
	button.addEventListener('click', function(e){
		var orderId = document.querySelector('#orderId');
		var item = document.querySelector('#item');
		var quantity = document.querySelector('#quantity');

		addItems(orderId);
		addItems(item);
		addItems(quantity);

		table.appendChild(trNew);
	});
});