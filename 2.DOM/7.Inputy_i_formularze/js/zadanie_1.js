/**
 * Created by Jacek on 2016-01-12.
 */
//## Ćwiczenie 1
//
// Na stronie znajduje się formularz do zamówienia. Znajduje się w nim sekcja odpowiedzialna za wystawienie faktury. 
// Napisz kod JavaScript, który spowoduje, że sekcja ta jest widoczna tylko i wyłącznie wtedy, kiedy zaznaczony jest checkbox "Chcę otrzymać fakturę".
document.addEventListener('DOMContentLoaded', function(){

	var invoiceData = document.querySelector('#invoiceData');
	

	invoiceData.classList.add('hidden');
	var checkbox = document.querySelector('#invoice');
	checkbox.addEventListener('click', function(e){
		invoiceData.classList.toggle('hidden');
	});
});