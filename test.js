// Ciklai

// console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
console.log('\n------------- 1 -------------\n');
for (let i = 0; i < 5; i++) console.log('Labas');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
console.log('\n------------- 2 -------------\n');
for (let i = 0; i < 5; i++) console.log(i);

// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
console.log('\n------------- 3 -------------\n');
for (let i = 0; i < 5; i++) console.log(i * 10);

// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
console.log('\n------------- 4 -------------\n');
for (let i = 49; i <= 53; i++) console.log(i);

// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
console.log('\n------------- 5 -------------\n');
for (let i = 4; i >= 0; i--) console.log(i);

// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
console.log('\n------------- 6 -------------\n');
for (let i = 0; i <= 8; i+=2) console.log(i);

// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
console.log('\n------------- 7 -------------\n');
for (let i = 0; i < 5; i++) console.log(Math.trunc(Math.random() * 10 + 1));

// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
console.log('\n------------- 8 -------------\n');
let random1;
console.log('Variantas A\n');
for (;;) {
    random1 = Math.trunc(Math.random() * 10 + 1);
    console.log(random1);
    if (random1 === 5) break
}
console.log('Variantas B\n');
let random2 = 0;
while (random2 !== 5) {
    random2 = Math.trunc(Math.random() * 10 + 1);
    console.log(random2);
}

// console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
console.log('\n------------- 9 -------------\n');
let random3 = 0;
let suma = 0;
while (suma <= 100) {
    random3 = Math.trunc(Math.random() * 10 + 1);
    suma += random3;
    console.log(random3);
}

// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
console.log('\n------------- 10 -------------\n');
let random4 = 0;
let cycleCount = 0;
while ((random4 !== 5) && (random4 !== 7)) {
    cycleCount++;
    random4 = Math.trunc(Math.random() * 10 + 1);
    console.log(random4);
}
console.log('Kiek ciklu prasisuko: ', cycleCount);

// console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
console.log('\n------------- 11 -------------\n');
let random5 = 0;
let suma2 = 0;
let cycleCount2 = 0;
while ((suma2 < 20) || (cycleCount2 <= 11)) {
    cycleCount2++;
    random5 = Math.trunc(Math.random() * 10 + 1);
    suma2 += random5;
    console.log(random5);
}
console.log('Suma: ', suma2, ' Kiek ciklu: ', --cycleCount2);

// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
console.log('\n------------- 12 -------------\n');
let random6 = 0;
let oddCount = 0;
while (oddCount < 3) {
    random6 = Math.trunc(Math.random() * 10 + 1);
    random6 % 2 !== 0 ? oddCount++ : '';
    console.log(random6);
}

// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
console.log('\n------------- 13 -------------\n');
let randomA = 0;
let randomB = 1;
while (randomA !== randomB) {
    randomA = Math.trunc(Math.random() * 10 + 1);
    randomB = Math.trunc(Math.random() * 10 + 1);
    console.log(randomA, ' ', randomB);
}

// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose. Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
console.log('\n------------- 14 -------------\n');
let randomA2 = 0;
let randomB2 = 1;
let sumA2 = 0;
let sumB2 = 0;
while ((sumA2 <= 100) || (sumB2 <= 100)) {
    randomA2 = Math.trunc(Math.random() * 10 + 1);
    randomB2 = Math.trunc(Math.random() * 10 + 1);
    sumA2 += randomA2;
    sumB2 += randomB2;
    console.log(randomA2, ' ', randomB2);
}
console.log('Suma1: ', sumA2, ' Suma2: ', sumB2);

// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių.
console.log('\n------------- 15 -------------\n');
let randomA3 = 0;
let randomB3 = 0;
let oddCountA3 = 0;
let oddCountB3 = 0;

while ((oddCountA3 < 3) || (oddCountB3 < 3)) {
    randomA3 = Math.trunc(Math.random() * 10 + 1);
    randomB3 = Math.trunc(Math.random() * 10 + 1);
    randomA3 % 2 !== 0 ? oddCountA3++ : '';
    randomB3 % 2 !== 0 ? oddCountB3++ : '';
    console.log(randomA3, ' ', randomB3);
}
console.log('Kiek nelyginiu 1: ', oddCountA3, ' Kiek nelyginiu 2: ', oddCountB3);