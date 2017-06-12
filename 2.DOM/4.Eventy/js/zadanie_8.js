/**
 * Created by Jacek on 2016-01-12.
 */
//## Ćwiczenie 8
//Na stronie znajdują się dwa elementy, które pokazują wielkość okna. Dopisz event do okna (element ```window```), który spowoduje, że elementy te będą pokazywały poprawne wartości nawet po przeskalowaniu okna.

document.addEventListener('DOMContentLoaded', function(){
  var height = document.getElementById('windowHeight');
  var width = document.getElementById('windowWidth');
  
  window.addEventListener('resize', function(){

    height.innerText = window.innerHeight;
    width.innerText = window.innerWidth;
  });
});