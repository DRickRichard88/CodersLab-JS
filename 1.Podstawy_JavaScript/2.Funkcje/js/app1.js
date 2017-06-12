function rockPaperScissors('Player1', 'Player2') {
	if (('Player1' ==='paper')&&('Player2'==="scissors")){
		return 'Player2wins'; 
	}
	else if (('Player1' ==='scissors')&&('Player2'==="paper")){
		return ('Player1wins');
 	}
 	else if (('Player1' ==='scissors')&&('Player2'==="rock")){
		return ('Player2wins');
	}
	else if (('Player1' ==='rock')&&('Player2'==="scissors")){
		return ('Player1wins');
    }
    else if (('Player1' ==='rock')&&('Player2'==="paper")){
		return ('Player2wins');
    }
  	else if (('Player1' ==='paper')&&('Player2'==="rock")){
		return ('Player1wins');
    }
	else if (('Player1' ==='rock')&&('Player2'==="rock")){
		return ('Round Draw');
    }
    else if (('Player1' ==='scissors')&&('Player2'==="scissors")){
		return ('Round Draw');
	}
	else if (('Player1' ==='paper')&&('Player2'==="paper")){
		return ('Round Draw');	
	}
var wynik = rockPaperScissors();
console.log(wynik);
}


// function calculateTip(amount, raiting) {
// 	var tip = 0;
// 	if(raiting === 'bdb') {
//        tip = 0.25
// 	}
// 	else if(raiting === 'db') {
// 		tip = 0.2
//    }
//    else if(raiting === 'śr') {
//    	tip = 0.15
//    }
//    else if(raiting === 'zła') {
//    	tip = 0
//    }
//    return tip*amount;
//    }

//var wynik = calculateTip(200,'bdb');
//console.log(wynik);




	


// ///function arg(a, b) {
// //	if(a > b) {
// //		return a;
// //	} else {
// //		return b;
// //	} 

// // function arg(a, b, c) {
// 	// var sum = a + b + c
// 	// return suma;
// // }

 // function anonim(a * m) {
 //     var a = 10
 //    var m = "" 
 //     	m = a("Wszędzie i zawsze pisząc kod, używam funkcji oraz pilnuję, żeby nie tworzyć zmiennych globalnych")    	console.log ("m")
 //     }

/*function Cost(days) {
 	var prize = 0;
	if(days <= 1 ) {
		prize=200 ;
	}
	else if ((days > 1) && (days <= 3)) { 
 		prize=180 ;
  }
 	else if ((days > 3) && (days <= 7)) {
 		prize=160 ;
     }
 	else if (days > 8) {
 		prize=150 ;
 	}
     var numbersOfWeeks = Math.floor(days / 7);
 	var wynik = (prize * days) - (numbersOfWeeks * 50)
 	return wynik;
 }

 Cost(14);
 Cost(5);
*/