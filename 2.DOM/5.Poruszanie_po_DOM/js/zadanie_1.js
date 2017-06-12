/**
 * Created by Jacek on 2016-01-12.
 */
// ## Ćwiczenie 1
// W pliku znajduje się kilka przycisków (są to odpowiednio postylowane linki). Po klinknięciu w którykolwiek z nich element, 
// który znajduje się bezpośrednio po nim, powinien zniknąć (jeżeli był widoczny) lub się pojawić (jeżeli był niewidoczny).
// Rozwiązanie musi spełniać następujące założenia:
// 1. Na wszystkie przyciski musi być założony ten sam event.
// 2. Następny element ma być wyszukiwany zależnie od położenia ```this```.
// 3. Kod musi działać poprawnie i nie generować błędów (pamiętaj o sprawdzeniu, czy następny element nie równa się ```null```).
window.addEventListener('DOMContentLoaded', function () {
	var buttons = document.querySelectorAll('.button');
	console.log(buttons);
	for(var i = 0; i < buttons.length; i++){
		buttons[i].addEventListener('click',function(){
			this.nextElementSibling.classList.toggle('hidden');
		});
	}
});