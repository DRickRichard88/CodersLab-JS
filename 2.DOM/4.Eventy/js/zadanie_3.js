/**
 * Created by Jacek on 2016-01-12.
 */
//Na stronie znajdują się 3 guziki i 3 liczniki (elementy ```span``` o klasie ```counter```). Do każdego guzika dopisz event, który spowoduje, że przypisany do niego licznik zwiększy swoją wartość o 1 po klinknięciu w guzik.
//Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```.

document.addEventListener('DOMContentLoaded',function(){
  var buttons = document.querySelectorAll('button');
  for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(event){
      var selector = "#" + this.id + " + p span";
      var p = document.querySelector(selector);
      var actualCounter = parseInt(p.innerText);
//      var actualCounter = p.innerText;
      p.innerText = actualCounter + 1;
      
    })
   
  }
  
  
});