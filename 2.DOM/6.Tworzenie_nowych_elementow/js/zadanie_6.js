/**
 * Created by Jacek on 2016-01-12.
 */
// ## Ćwiczenie 6
// Na stronie znajdują się dwie listy. Obok każdego wpisu (w obu listach) znajdują się przyciski. 
// Napisz taki kod JavaScript, żeby po przyciśnięciu guzika element listy był przenoszony do drugiej listy.
// Pamiętaj, że element może być przenoszony wiele razy (np. z listy 1 do listy 2, a potem z powrotem do listy 1).
document.addEventListener('click', function(){

	var mBtn = document.querySelectorAll('.moveBtn');
	var listOne = document.querySelector('#list1');
	var listTwo = document.querySelector('#list2');

	function usun(txt) {
		var parent = txt.parentElement;
		parent.removeChild(txt);
	}

	for(var i = 0; i < mBtn.length; i++){
		mBtn[i].addEventListener('click', function(){
			var li = this.parentElement;
			var grandP = li.parentElement;
			var safe = li.cloneNode(true);

			usun(li);
			if(grandP.id === 'list1'){
				list2.appendChild(safe);
			} else if (grandP.id === 'list2'){
				list1.appendChild(safe);
			}
		});
	}
});