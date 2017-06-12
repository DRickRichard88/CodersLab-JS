// ## Ćwiczenie 1
// Stwórz obiekt samochód, utwórz dla niego odpowiednie atrybuty i metody.
// Samochód powinien mieć następujące atrybuty:
//   1. Markę,
//   2. Kolor,
//   3. Ilość przejechanych kilometrów (na początku 0)

// I następujące metody:
//   1. ```printCarinfo()``` - metoda powinna wypisywać informacje o samochodzie (jego kolor, markę i ile kilometrów ma przejechane).
//   2. ```drive(km)``` - która dodaje do przejechanych kilometrów podaną wartość. Użyj słowa kluczowego ```this``` żeby odwołać się do obiektu w środku metody.

// ## Ćwiczenie 2
// Do obiektu samochód z ćwiczenia pierwszego dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy). Dodaj ten nowy atrybut poza ciałem obiektu.
// Dodaj też metodę, która dodaje wpis do tej tablicy i metodę, która wyświetla wszystkie przeglądy samochodu. Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.

// var car = {
// 	brand: "Ford",
// 	color: "black",
// 	mileage: 0,
// 	printCarinfo: function() {
// 		console.log(this);
// 	},
// 	drive: function(km) {
// 		this.mileage += km;
// 	}
// }

//tworzę konstruktor objektów typu car
var car = function (brand, color) {
	this.brand = brand,
	this.color = color,
	this.mileage = 10
}


//tworzę metodę dodającą przejechane kilometry do objektów
car.prototype.drive = function(km) {
	 this.mileage += km;
}



//tworzę metodę do wydruku informacji o objektach
car.prototype.printCarinfo = function() {
	console.log(this.color + ' ' + this.brand + ' przejechał ' + this.mileage);
	console.log(this);
}

car.prototype.inspection = [];

car.prototype.addInspection = function(){
	 this.inspection.push(newInsp);
}

car.prototype.InspectionList = function(){
	for(var i = 0; i < inspection.length; i++) {
		console.log(this.inspection[i])
	}
}
var newInsp = ['2015', '2016', '2017'];
//tworzę FORD  obiekt
var ford = new car("Ford","czarny", 2);
var fiat = new car("fiat", "blue", 15);


ford.printCarinfo();
ford.drive(600);
fiat.printCarinfo();
fiat.drive(400);


// ## Ćwiczenie 4

// Stwórz konstruktor dla obiektów ```Rectangle```, który będzie przyjmować informację na temat długości i szerokości nowo stworzonej figury.
// Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
//   1. ```getArea()``` - metoda ma zwracać pole powierzchni,
//   2. ```getPerimiter()``` - metoda ma zwracać obwód.

// Następnie stwórz kilka obiektów i zobacz czy metody działają tak jak powinny.

var Rectangle = function(height,width) {
	this.height = height,
	this.width = width
}

Rectangle.prototype.getArea = function(width, height) {
	return 0.5 * this.width * this.height;
}

Rectangle.prototype.getPerimeter = function (height,height) {
	return 2 * this.height + this.width;
}

var rec1 = new Rectangle(10,5);
var rec2 = new Rectangle(2,2);
var rec3 = new Rectangle(20,30);

// ## Ćwiczenie 5
// Stwórz konstruktor dla obiektów ```Calculator```. Konstruktor ma nie przyjmować żadnych danych. Każdy nowo stworzony obiekt powinien mieć pustą tablicę w której będzie trzymać historię wywołanych operacji.
// Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
//   1. ```add(num1, num2)``` - metoda ma dodać do siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "added ```num1``` to ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
//   2. ```multiply(num1, num2)``` - metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "multiplied ```num1``` with ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
//   3. ```subtract(num1, num2)``` - metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "subtracted ```num1``` from ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
//   4. ```divide(num1, num2)``` - metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "divided ```num1``` by ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
//   5. ```printOperations()``` - metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
//   6. ```clearoperations()``` - metoda ma wyczyścić wszystkie operacje z pamięci.

// Pamiętaj o używaniu ```this```.

var calculator = function(){
	this.record = [],
	this.add = function(num1,num2) {
		this.record.push( "added " + num1 + " to " + num2 + " got result " + (num1 + num2));
		return num1 + num2;
	},
	this.multiply = function(num1, num2) {
		this.record.push("multiplied " + num1 + " with " + num2 + " got resault " + (num1 + num2));
		return num1 * num2;
	},
	this.substract = function(num1,num2) {
		this.record.push("substracted " + num1 + " from " + num2 + " got result " + (num1 - num2));
		return num1 - num2;
	},
	this.divide = function(num1,num2) {
		this.record.push("divided " + num1 + " by " + num2 + " got result " + (num1 / num2));
		return num1 / num2;
	},
	this.printOperation = function() {
		console.log(this.record);
	},
	this.record = [];
};

var calc = new calculator();

