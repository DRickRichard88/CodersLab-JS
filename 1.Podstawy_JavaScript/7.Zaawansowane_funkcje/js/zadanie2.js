/**
 * Funkcje wy¿szego rzêdu.
 * PrzeœledŸ krok po kroku ka¿d¹ linijkê kodu. Ka¿d¹!
 * Spróbuj napisaæ komentarze dla ka¿dej z linijek kodu
 */

//Deklaracja funkcji 
function sortArray() {

    //Tablica z liczbami zadeklarowana w funkcji 'rodzic'
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Tunkcja sortująca pobiera jako argument dwie pierwsze liczby .
    points.sort(function(a, b){
        //Dwie pobrane liczby są porównywane i sortowane od najmniejszej do największej
        return a-b;
    });

    //zwracanie posortowanej tablicy
    return points;
}

//Wywołanie funkcji
sortArray();
