/**
 * Zagnie¿d¿anie funkcji.
 * PrzeœledŸ krok po kroku ka¿d¹ linijkê kodu. Ka¿d¹!
 * Spróbuj napisaæ komentarze dla ka¿dej z linijek kodu
 */


//Deklaracja fukncji jeden
function jeden() {

    //tworzymy zmienną, tylko w funkcji jeden (jest dziedziczona przez fukcje zagnieżdżone w niej)
    var zmienna1 = 1;

    //Tworzymy fukncję dwa zagnieżdżoną w funkcji jeden
    function dwa() {

        //Zmienna zmienna1 jest widoczna we wszystkich funkcjach zagnieżdżonych w funkcji jeden
        console.log(zmienna1);

        //Ta zmienna jest widoczna tylko w zakresie tej funkcji
        var zmienna2 = 3;
    }

    //Odpalamy funkcję dwa z tego miejsca
    dwa();

    //Zmienna 2 była zadeklarowana w funkcji dwa więc nie da się jej zobaczyć w f.jedenjuż więc funkcja dwa nie zadziała
    console.log(zmienna2);

}

//Dlatego zmienna2 nei zostanie wyświetlona
jeden()