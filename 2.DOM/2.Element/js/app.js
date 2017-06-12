/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
  var homeElement = document.getElementById("home");
  var childElements = document.querySelector(".oferts").children;
  var banner = document.querySelector(".ban");
  var blocks = document.querySelectorAll(".block");
  var links = document.querySelector(".links").children;

  // cw1

  console.log(homeElement);
  console.log(homeElement.tagName);
  console.log(homeElement.className);

  console.log("---");

  console.log(childElements);
  
  for (var i = 0; i < childElements.length; i++) {
    console.log(childElements[i].tagName);
    console.log(childElements[i].className);
  }

  console.log("------");

  console.log(banner);
  console.log(banner.tagName);
  console.log(banner.className);

  console.log("---");

  console.log(blocks);
  
  for (var i = 0; i < blocks.length; i++) {
    console.log(blocks[i].tagName);
    console.log(blocks[i].className);
  }

  console.log("---");

  console.log(links);
  
  for (var i = 0; i < links.length; i++) {
    console.log(links[i].tagName);
    console.log(links[i].className);
  }


  // cw2
  for (var i = 0; i < blocks.length; i++) {
    console.log(blocks[i].innerHTML);
    console.log(blocks[i].outerHTML);
  }

  blocks[0].innerHTML = "Nowa wartość diva o klasie blocks";
  console.log(blocks[0].innerHTML);
  //kod html nie zmienił się, bo te zmiany zapamiętywane są tylko w pamięci przeglądarki


  // cw3

  console.log(homeElement.id);


  // cw4

  for (var i = 0; i < childElements.length; i++) {
    console.log(childElements[i].tagName);
  }


  // cw5

  for (var i = 0; i < links.length; i++) {
    console.log(links[i].dataset);
  }


  // cw6

  console.log(banner.classList);
  //classList zwraca tabelę
  console.log(banner.className);
  //className zwraca string
});










