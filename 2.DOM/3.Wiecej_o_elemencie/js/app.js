/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
//  ## Ćwiczenie 1
//  Na stronie są 3 obrazki z ikonami najpopularniejszych przeglądarek internetowych. Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy.
//  Napisz kod JavaScript, który:
//  1. Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo (obrazek jest nastawiany za pomocą ```background-image```). 
//  1. Poprawi linki tak, żeby każdy miał poprawny opis i atrybut href.
//  1. Poprawi szerokość elementu o klasie ```chrome``` (powinno być 100px).
//
//  Podejrzyj w konsoli, jak wygląda kod CSS dopisany przez JavaScript. Zastanów się, dlaczego dopisywany jest w tym miejscu. 
//  Napisz odpowiedź na to pytanie w komentarzu do zadania.
  var allEx1 = document.querySelectorAll('div.ex1')
  var ex1 = allEx1[1];
  
  console.log(ex1)
  
  var chrome = ex1.querySelector('div.chrome');
  chrome.style.width = '100px';
  
  var edge = ex1.querySelector('div.edge');
  edge.style.backgroundImage = 'url(assets/img/edge.png)'
  
  var firefox = ex1.querySelector('div.firefox');
  firefox.style.backgroundImage = 'url(assets/img/firefox.png)'
  
  var linkChrome = ex1.querySelector('div.chrome+a');
  var linkEdge = ex1.querySelector('div.edge+a');
  var linkFirefox = ex1.querySelector('div.firefox+a');
  
  linkChrome.innerHTML = 'Chrome';
  linkEdge.innerHTML = 'Edge';
  linkFirefox.innerHTML = 'Firefox';
  
  linkFirefox.setAttribute('href','https://mozilla.org');
  
//  ## Ćwiczenie 2 
//  Na stronie jest lista, w której musisz wpisać swoje imię i nazwisko, swój ulubiony kolor i potrawę. 
//  1. Wyszukaj wszystkie spany i zapisz je do odpowiednich zmiennych.
//  2. Za pomocą innerHTML wypełnij w nich odpowiednie informacje.
  
  var allEx2 = document.querySelector("div.ex2");
    console.log(allEx2)

  var name = allEx2.querySelector("#name");
  var fColor = allEx2.querySelector("#fav_color");
  var fMeal = allEx2 .querySelector("#fav_meal");
  
    console.log(name);
    console.log(fColor);
    console.log(fMeal);
  
  name.innerHTML = 'Jakub Bielecki';
  fColor.innerHTML = 'Black';
  fMeal.innerHTML = 'Baton';
  
//  ## Ćwiczenie 3
//  Na stronie jest proste menu. Zarówno kod HTML, jak i CSS jest już do niego przygotowany. Niestety ktoś zapomniał dodać odpowiednie klasy do odpowiednich elementów. 
//  1. Wyszukaj element ```ul``` i dodaj mu klasę ```menu```.
//  1. Wyszukaj wszystkie elementy ```li``` i dodaj im klasę ```menuElement``` (użyj do tego pętli). Uważaj, żeby nie wykasować klasy ```selected```.
//  1. Zauważ, że jeden z elementów ma czerwony kolor tekstu - jest to spowodowane tym, że ma klasę ```error```. Zabierz mu ją (najlepiej, jeżeli zabierzesz tę klasę wszystkim elementom, które ją mają).
var allEx3 = document.querySelector('div.ex3');
  console.log(allEx3);
  
var list = allEx3.querySelector('ul');
  list.className = 'menu';
  
var liList = allEx3.querySelectorAll('li');
  for(var i = 0; i <liList.length; i++){
    liList[i].classList.add('menuElement');
  }
  
  for(var i = 0; i <liList.length; i++){
    liList[i].classList.remove('error');
  }
//  ## Ćwiczenie 4
//  Dodaj do każdego elementu listy atrybut ```data-id``` przyjmujący kolejne liczby całkowite (zaczynając od 1). Rozwiąż to zadanie na dwa sposoby:
//  1. Używając datasetu.
//  1. Używając matody ```setAttribute```.
var allEx4 = document.querySelector('div.ex4');
  console.log(allEx4);
  
var li = allEx4.querySelectorAll('li');  
  
  
  for(var i = 0; i < li.length; i++){
    li[i].dataset.id=(i+1);
  }
  
  for(var i = 0; i < li.length; i++){
    li[i].setAttribute('data-id',i+1)
  }

  console.log(li)
  
//  ## Ćwiczenie 5
//  Zmodyfikuj listę w następujący sposób:
//  1. Dodaj atrybut ```data-direction``` nastawiony na wartość ```up``` każdemu elementowi ```li```, który nie posiada tego atrybutu.
//  1. Nastaw kolor tła co drugiego elementu listy na zielony.
//  1. Nastaw 5-mu elementowi listy klasę big.
//  1. Nastaw co 3-mu elementowi podkreślenie.

var allEx5 = document.querySelector('div.ex5');
  console.log(allEx5);
  
  var liEx5 = allEx5.querySelectorAll('li');
  
  for(var i = 0; i < liEx5.length; i++){
    if(liEx5[i].hasAttribute('data-direciton')) {
    }else{
      liEx5[i].setAttribute('data-direciton','up')
    }
  }
  
  for(var i = 0; i < liEx5.length; i++){
    if(i%2 === 0) {
      liEx5[i].style.backgroundColor = 'green';
    };
  }
  
  liEx5[4].classList.add('big');
  
  var a = allEx5.querySelectorAll("li a");

  for (var i = 0; i < a.length; i++) {
    if (i%3===0) {
      a[i].style.textDecoration = "underline";
    } else {
      a[i].style.textDecoration = "none";
    }
  }
});