/**
 * Created by Jacek on 2016-01-12.
 */
// ## Ćwiczenie 5
// Na stronie znajduje się podobna tabelka do zadania 2. Tym razem przy każdym zamówieniu znajduje się dodatkowo guzik,
//  który służy do usuwania tego zamówienia.
// Dopisz do niego odpowiedni event, który spowoduje, że dane zamówienie zniknie z tabelki. 
// Spróbój zrobić to w taki sposób, żeby wszystkie guziki korzystały z tego samego eventu (użyj ```this```).
// Pamiętaj o zmianie łącznej kwoty na samym dole tabelki!
document.addEventListener('DOMContentLoaded', function(){
	
	var button = document.querySelectorAll('.deleteBtn');

	for(var i = 0; i < button.length; i++) {
		button[i].addEventListener('click',function(e){
			var tr = this.parentElement.parentElement;
			tr.parentElement.removeChild(tr);
		});
	}
});