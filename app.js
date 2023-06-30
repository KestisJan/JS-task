// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)



function compare (a, b) {
    if(a > b) {
        return `${a} > ${b}`;
    } else if (a === b) {
        return `${a} === ${b}`;
    } else (b > a) 
        return `${a} < ${b} `;

}

// console.log(compare(4, 2))
// console.log(compare(-14, 55))
// console.log(compare(1, 1))
// console.log(compare(10, 99))

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

function range () {
    for(let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

//console.log(range());

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

function everySecondNumber() {
    for(let i = 0; i <= 10; i+=2) {
        console.log(i);
    }
}

// console.log((everySecondNumber()));

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

function randomNumber() {
    sum = [];
    for (let i = 0; i < 5; i++) {
       sum += Math.floor(Math.random() * 11);
    }
    return `${sum}`;
}

// console.log(randomNumber())



// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)


// Nemoku padaryt 

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

function masyvas() {
   let start = 10;
   let end = 30;
   let arr = []; 
    for (let i = start; i <= end; i++) {
        arr.push(start++)
    }
    console.log(`Masyvo ilgis - ` + arr.length);
    console.log(`Masyvas - ` + arr);
    let biggestValue = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > biggestValue) {
            biggestValue = arr[j];
        }
    }
    return `Didziausia masyvo reiksme - ` +  biggestValue;
}

// console.log(masyvas());


// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

function randomRaides () {
    let letters = ['A','B','C','D']
let arr = []
let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;
    for(let i = 1; i <= 100; i++) {
        arr += letters[Math.floor(Math.random() * letters.length)];
    }
    for(let count of arr) {
        if(count === 'A') {
            countA++
        } else if (count === 'B') {
            countB++
        } else if (count === 'C') {
            countC++;
        } else if (count === 'D') {
            countD++
        }
    }

console.log(`Random sugeneruotos raides - `+  arr);
console.log(`Masyvo ilgis `+  arr.length);
console.log(`Total A - ` + countA);
console.log(`Total B - ` + countB);
console.log(`Total C - ` + countC);
console.log(`Total D - ` + countD);
}

// randomRaides();

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma(a, b) {
     if (typeof a === `number` && typeof b === `number`) {
        let sum = a + b;
            if(sum % 2 === 0) {
                return `Suma - ` + sum;
            } else {
                return `Nelygine suma`;
            }
        
    } if (typeof a === `object` && typeof b === `object`) {
        let arrSum  = a.length + b.length;
            if(arrSum % 2 === 0) {
                return `Masyvo ilgis - ` + arrSum;
            } else {
                return `Nelygine suma`;
            }
    } else {
        return `Bad input type`
    }
}

// console.log(lygineSuma(3, 2));
// console.log(lygineSuma(2, 2));
// console.log(lygineSuma([5,4,5], [1,2]));
// console.log(lygineSuma([5,5], [1,2]));
// console.log(lygineSuma([4], 1));
// console.log(lygineSuma(`t`, `rr`));

//  9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį.   Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function pirminisSkaicius(a) {
    if(isNaN(a) || !isFinite(a) || a % 1 || a < 2) {
        return false;
    }
        let m = Math.sqrt(a);
        for (let i = 2; i <= m; i++) {
            if (a % i === 0) {
                return false;
            } else {
                return true;
            }
    }
}

// console.log(pirminisSkaicius(11));
// console.log(pirminisSkaicius(10));


// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -  "(XXX) XXX-XXXX". (10 taškų)


function telefonoNumeris(a) {
    let phone = `(XXX) XXX-XXXX`;
    if (typeof a === `object` && a.length === 10) {
        for (let i = 0; i < a.length; i++) {
            phone = phone.replace('X', a[i]);
        }
        return phone;
    } else {
        return `Must be object 10 digit long`
    }
}

// console.log(telefonoNumeris(`fd`));
// console.log(telefonoNumeris(4));
// console.log(telefonoNumeris([4, 1, 8, 6, 9, 1, 2, 3, 7, 5]));