/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
//cw1

     home = document.getElementById("home");
     console.log(home);

     homeSec = document.querySelector("#home");
     console.log(homeSec);

     var firstLi = document.querySelector("li:not([data-direction])");
     console.log(firstLi);

     var classBlock = document.querySelector(".block");
     console.log(classBlock);

//cw2

     var allLiInNav = document.querySelectorAll("nav li");
     console.log(allLiInNav);
     console.log(allLiInNav.length);

     var allPinDiv = document.querySelectorAll("div p");
     console.log(allPinDiv);
     console.log(allPinDiv.length);

     var allDivInArt = document.querySelectorAll("article div");
     console.log(allDivInArt);
     console.log(allDivInArt.length);

//cw3
     var articleClassFirst = document.querySelector("article.first");

     console.log(articleClassFirst);

     var h1InArt = articleClassFirst.querySelectorAll("h1");
     console.log(h1InArt.length);
     console.log(articleClassFirst.querySelectorAll("h1").length);

     var classOfertsInArticleFirst = articleClassFirst.querySelectorAll(".oferts");
	 console.log(classOfertsInArticleFirst);

	 var divInArticleFirst = articleClassFirst.querySelectorAll("div");
	 console.log(divInArticleFirst);
});