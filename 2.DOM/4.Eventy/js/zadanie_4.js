/**
 * Created by Jacek on 2016-01-12.
 */
//## Ćwiczenie 4
//Na stronie znajdują się 3 guziki i jeden licznik. Napisz **jeden** wspólny event dla wszystkich guzików, który spowoduje, że licznik zwiększy wartość o 1 po klinknięciu w guzik.
//Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```.

document.addEventListener('DOMContentLoaded', function(){
  
  var buttons = document.querySelectorAll('button');
  var span = document.querySelector('span');
  
  console.log(span)
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event){
      var span = document.querySelector('span');
      span.innerText = parseInt(span.innerText) + 1;
    });
  }
});