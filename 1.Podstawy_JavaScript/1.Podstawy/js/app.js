// ## Ćwiczenie 1
// Stwórz tyle zmiennych ile różnych znasz typów. Każdą odpowiednio nazwij i wstaw do nich odpowiednie dane. Następnie dodaj do siebie różne zmienne i zobacz jakiego typu jest wynik. Napisz w komentarzu przy każdej zmiennej jej typ.
// Wypisz każdą zmienną w konsoli.

var undefinded;
var nic = ""; //string
var zero = 0; //number
var number = 1; //number
var string = "qwerty" //string
var boolean = true; //boolean
var array = [1,2,3]; //object?
var table = ["1,1,1","2,2,2","3,3,3"]; //object?
var object = {
	name: "Jakub",
	age: 28
}; // object

console.log(zero + " " + typeof zero);
console.log(number + " " + typeof number);
console.log(string + " " + typeof string);
console.log(boolean + " " + typeof boolean);
console.log(array + " " + typeof array);
console.log(table + " " + typeof table);
console.log(object + " " + typeof object);

var zeroPlusBoolean = zero + boolean; //number + boolean = undefined
var numberPlusBoolean = number + boolean; // number + boolean = number
var numberPlusString = number + string; // number + string = string
var stringPlusNumber = string + number; // string + number = string
var stringPlusBoolean = string + boolean; //string + boolean = string

console.log(zeroPlusBoolean + " – typ " + typeof zeroPlusBoolen);
console.log(numberPlusBoolean + " – typ " + typeof numberPlusBoolean);
console.log(numberPlusString + " – typ " + typeof numberPlusString);
console.log(stringPlusNumber + " – typ " + typeof stringPlusNumber);
console.log(stringPlusBoolean + " – typ " + typeof stringPlusBoolean);


// ## Ćwiczenie 2
// Stwórz zmienną, która będzie przetrzymywała stan pogody (sam modyfikuj tą zmienną) 
// np.:
// var weather = "deszczowo"
// Wykorzystaj poznaną instrukcję warunkową, aby wyświetlić informację 
// w konsoli czy powinieneś wziąć parasol czy nie. Zmień wartość zmiennej ```weather``` 
// i sprawdź co zostanie wypisane.



var wether = "deszcz";

if (wether==="deszcz") {
	console.log ("Parasol")
} else {
	console.log ("Nie parasol")
}

// ## Ćwiczenie 4

// Napisz pętlę for, która będzie iterowała od 0 do 15. W każdej iteracji, 
// sprawdź czy bieżąca liczba jest parzysta czy nieparzysta i wyświetl informacje 
// w konsoli.

for(var i = 0; i < 15; i++){
	if(i%2===0){
		console.log(i + 'parzysta')
	} else {
		console.log(i + 'nieparzysta')
	}
}

for (var i = 0; i <= 15; i++) {
	switch (i%2===0) {
		case (true):
			console.log(i + " - liczba parzysta");
			break;
		case (false):
			console.log(i + " - liczba nieparzysta");
		break;
	}
}














