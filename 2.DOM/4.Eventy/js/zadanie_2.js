/**
 * Created by Jacek on 2016-01-12.
 */
//## Ćwiczenie 2
//Na stonie znajduje się guzik. Podepnij do niego event, który na kliknięcie spowoduje, że w konsoli wyświelti się napis "Hura! Działa!".
//Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```.

document.addEventListener("DOMContentLoaded", function() {
  
  var button = document.getElementById('mainBtn');
  
  button.addEventListener('click',function(event){
    console.log('Hurra działa !')
  })
  
  
});