/**
 * Created by Jacek on 2016-01-12.
 */
// ## Ćwiczenie 4
// Znajdź i zapisz do zmiennych następujące elementy:
// 1. Element o klasie ```first``` -> jego pierwsze dziecko -> jego trzecie dziecko.
// 2. Element o id ```second``` -> jego rodzic -> jego czwarte dziecko.
// 3. Element o atrybucie ```data-ex``` nastawionym na wartość ```third``` -> jego dziadek -> 
// jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko (żeby otrzymać środkowy element,
//  podziel ilość dzielci przez 2 i zaokrąglij do góry).
// 4. Div o klasie ```forth``` -> jego rodzic -> jego pierwsze dziecko o klasie ```article``` -> 
// jego drugie dziecko o tagu ```<p>```.

document.addEventListener('DOMContentLoaded', function(){

	var first = document.querySelector('.first');
	var firstA = first.firstChild;
	var firstB = first.children[3];

	console.log(first);
	console.log(firstA);
	console.log(firstB);

	var second = document.getElementById('second');
	var secondA = second.parentElement;
	var secondB = secondA.children[4];

	console.log(second);
	console.log(secondA);
	console.log(secondB);

	var thirth = document.querySelector("[data-ex='third']");
	var thirthA = thirth.parentElement.parentElement;
	var thirthB = thirthA.lastElementChild;
	var thirthC = thirthB.firstElementChild.firstElementChild; //tu w poleceniu jest pierwsze dziecko, a trzeba iść do pierwszego dziecka pierwszego dziecka
	var thirthChildren = thirthC.children;
	var thirthD = thirthC[Math.floor(thirthChildren.length/2)]; //tu w poleceniu też jest błąd, bo trzeba zaokrąglić w dół, a nie w górę

	console.log(thirthD);


	var Z4a = document.querySelector("div.forth");
	var Z4b = z4a.parentElement;
	var Z4c = z4b.querySelector("article"); //tu jest błąd w poleceniu, nie ma elemntu o klasie article, jest element article
	var Z4cc = z4c.querySelectorAll("p");
	var Z4d = z4cc[1];

	console.log(Z4d);
});