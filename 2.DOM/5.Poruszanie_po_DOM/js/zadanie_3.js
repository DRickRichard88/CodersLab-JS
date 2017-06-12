/**
 * Created by Jacek on 2016-01-12.
 */

// ## Ćwiczenie 3
// W pliku znajdują się 3 listy (każda osadzona w elemencie ```div```).
// Po najechaniu myszką na element ```div``` zmienic się mają kolory tła elementów jego listy. 
// Odpowiednio:
// 1. Pierwszy element w liście ma mieć kolor czerwony.
// 2. Ostatni element w liście ma mieć kolor niebieski.
// 3. Wszystkie inne elementy mają mieć kolor zielony.

// Rozwiązanie musi spełniać następujące założenia:
// 1. Na wszystkie divy musi być założony ten sam event.
// 2. Elementy listy mają być wyszukane w zależności od ```this```.
document.addEventListener('DOMContentLoaded', function () {
	var div = document.querySelectorAll('.listContainer');
	for(var i = 0; i < div.length; i++) {
		div[i].addEventListener('mouseover', function(){
			var ul = this.firstElementChild.children;
			for(var i = 1;i < ul.length-1; i++){
				ul[i].style.backgroundColor = 'green';
			}
			this.firstElementChild.firstElementChild.style.backgroundColor = 'red';
			this.firstElementChild.lastElementChild.style.backgroundColor = 'blue';
		});
	}
})