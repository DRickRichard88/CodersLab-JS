/**
 * Created by Jacek on 2016-01-12.
 */
//## Ćwiczenie 6
//Na stronie znajduje się jeden element ```div```. Napisz dla niego event, który będzie wypisywał położenie myszki w chwili, w której kursor znajduje się nad tym elementem.
//Wyszukaj zarówno położenie myszki globalne (czyli odległość od górnego lewego rogu okna), jak i lokalne (czyli odległość od lewego górnego rogu elementu).
//Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```. 
document.addEventListener('DOMContentLoaded', function(){
  var globalX = document.getElementById('globalX');
  var globalY = document.getElementById('globalY');
  var localX = document.getElementById('localX');
  var localY = document.getElementById('localY');
  
  var div = document.getElementById('box');
  
  function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
      left: el.left + window.scrollX,
      top: el.top + window.scrollY
    }
  }

  div.addEventListener("mousemove", function(event){
    globalX.innerText = event.clientX;
    globalY.innerText = event.clientY;
    localX.innerText = Math.floor(event.clientX - getOffset(this).left);
    localY.innerText = Math.floor(event.clientY - getOffset(this).top);
  })
})

