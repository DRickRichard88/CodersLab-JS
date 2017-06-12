/**
 * Created by Jacek on 2016-01-12.
 */
//## Ćwiczenie 5
//Na stronie znajdują się 3 elementy ```div```. Napisz **jeden** wspólny event dla nich wszystkich, który będzie zmieniał kolor tła **tylko** w klikniętym divie. Użyj do tego słowa kluczowego ```this```.
//Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```. 
//Hint:
//Żeby uzyskać losowy kolor użyj poniższego kodu:
//```
//var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//```

document.addEventListener('DOMContentLoaded', function(){
  var div = document.querySelectorAll('.box');
  
  for(var i = 0; i < div.length; i++) {
    div[i].addEventListener('click', function(event){
      this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
  }
});