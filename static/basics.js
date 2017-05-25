'use strict' // kötött mód, szigorúbbak a szabályok, érdemes használni

console.log("Hello bazmeg");

// globalis valtozo lesz a szoveg!!! a kódban MINDENHOL elérhető lesz a szoveg valtozo
// szoveg = "ez itt a szoveg";
// console.log("a szoveg valtozo tartalma: "+szoveg);

// újra deklarálható szöveg lesz
var szoveg2 = "ez egy uj szoveg";
szoveg2 = "uj erteket kap a szoveg2";
var szoveg2 = "ez egy uj szoveg uj ertekkel, var kulcsszóval hoztuk létre";
console.log(szoveg2);
// nem lesz ujra deklarálható
let szoveg3 = "ez egy nem ujra deklaralhato szoveg, let kulcsszóval hoztuk létre";

// ez nem mukodik mert mar deklaraltuk a szoveg3-at
// let szoveg3 = "ez egy nem ujra deklaralhato szoveg, let kulcsszóval hoztuk létre";
// uj erteket adok a szoveg3 valtozoban;
szoveg3 = "vas;aldksldkgj";
console.log(szoveg3);


// ezzel statikus szoveget és valtozo tartalamat is kiirunk:
console.log("a szoveg3 tartalma: "+szoveg3); // string osszefuzes

// a typeof fugveny kiirja a bele rakott valtozo tipusat
console.log("a szoveg3 TIPUSA: "+typeof(szoveg3) );
// string: karakterlánc (1 vagy több karakterből álló adat)

let szam = 1;
let szam2 = "1";
console.log("a szam valtozo tartalma: "+szam);
console.log("a szam TIPUSA: "+typeof(szam) );
console.log("a szam2 TIPUSA: "+typeof(szam2) );

szam = szam +1; //igy is lehet, nem fontos a szoköz a plusz jel körül
console.log("a szam valtozo tartalma: "+szam);
szam2 = szam2 + 1; // igy is lehet
console.log("a szam2 valtozo tartalma: "+szam2);

// az utasítások végére ; jelet KELL tenni, lefut ezek nélkül is a kód (semicolon insertion) 
// de hibalehetőség!!!!!

console.log("a szam2 valtozo TIPUSA: "+typeof(szam2) );

// stringet számmá alakítani:
// parseInt fugveny: számmá alakaítja azt amit beadunk neki
szam2 = parseInt(szam2);
console.log("a szam2 valtozo TIPUSA: "+typeof(szam2) );


let valami = "asfasd";
valami = parseInt(valami);
console.log(valami);
console.log(typeof(valami));

// a szam valtozo megkapja az egyenlosegjel jobb oldalan levo eredmenyt
szam = 5 + 6 + 7;  // szam <- 5 + 6 + 7 

// két változó értékét így lehet kicserélni
let a = 3;
let b = 10;
let c;
console.log("csere elott> a = "+a+" b = "+b);

c = a;
a = b;
b = c;

console.log("csere utan> a = "+a+" b = "+b);

// változó típusok:  number, string, boolean

let igazhamis = true

if ( a > 5 && a < 20 ) {
  console.log ("a 5 es 20 kozott van");
} else {
  console.log ("lofasz");
}


let nev = "Geza";
if ( nev === "Geza" ) {
  console.log ("Geza ittvan");
}

// változo tipus: TÖMB ( Array )

// a tombben tobb elemet tudunk tarolni egyszerre, 
// tipustol fuggetlenul
let tomb = [32, 54, 65, 33, 66, 12]
let tomb2 = [12, "szoveg", true, 65, 33, 66]

console.log("a tomb : "+tomb);
console.log("a tomb tipusa: "+typeof(tomb));
console.log("a tomb elemeinek szama: "+tomb.length);

let vanbenne = false;
// for ciklus for ( ciklusvaltozo; kezdő érték; lépték ) ...
// i++ azt jelenti hogy egyessével 
for ( let i = 0; i<tomb.length; i++) {
  console.log("a tomb "+i+"-edik eleme: "+tomb[i]);
  if ( tomb[i] === 12) {
    vanbenne=true; 
  }
}

if (vanbenne) {
  console.log("van a tombben 12");
}
// mail -s "level targya" email@email.hu < basics.js

console.log("a gyumolcs: "+gyumolcs); // undefined, mert mar letezik a valtozo csak nem kapott értéket
var gyumolcs = "alma" // ha var-al deklaralunk arra érvényes a hoisting még strict modban is!
// hoisting: bizonyos változók vagy fügvények előbb jönnek létre mint ahogy lefut a kód
// semicolon insertion (automatikus pontosvessző beillesztés)


console.log("ez egy sor\nez egy uj sor\tez egy tabbal beljebb van"); // \n: uj sor, \t: tab
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXX\rValami"); // \r carrige return

szam++;  // rovidites: szam = szam + 1;
console.log("szam: "+szam);
console.log("szamhoz hozzaadok 1et, de elotte kiirom a számot:");
console.log(szam++);
console.log("szamhoz hozzaadok 1et, majd kiirom az eredményt:");
console.log(++szam);


// ciklusok
let j = 0
while ( j < tomb.length ) {
  console.log("szia");
  j++;
}

let osztalyzatok = [3,3,4,5,5,5,"2"];
let kettesek = 0;
let harmasok = 0;
let negyesek = 0;
let otosok = 0;

for( let i=0; i<osztalyzatok.length; i++ ) { // for-on belüli ciklus változónak lehet let i=0 több helyen is
  if( osztalyzatok[i] === 2 ) {
    kettesek++;
    // kettesek = kettesek +1;
  }
  if( osztalyzatok[i] === 3 ) {
    harmasok++;
    // harmasok = harmasok +1;
  }
  if( osztalyzatok[i] === 4 ) {
    negyesek++;
    // negyesek = negyesek +1;
  }
  if( osztalyzatok[i] === 5 ) {
    otosok++;
    // otosok = otosok +1;
  }
} //for

console.log("a kettesek szama: "+kettesek);
console.log("a harmasok szama: "+harmasok);
console.log("a negyesek szama: "+negyesek);
console.log("a otosok szama: "+otosok);

var koszones = function(szoveg) { //function expression
  console.log("hello "+szoveg+"!");
}

let keresztnev = "Pista";
koszones(keresztnev); // ez nem hasznalhato csak miutan deklaraltuk a fugvenyt (not hoisted)
koszones("Laci"); // ez nem hasznalhato csak miutan deklaraltuk a fugvenyt (not hoisted)


osszegzes(4, 5); // ez mar itt hasznalhato pedig csak kesobb deklaraltuk a fugvenyt (hoisted)

function osszegzes(szam1, szam2) { // function statement
  if ( (typeof(szam1) === 'number') && (typeof(szam2) === 'number')) {
    let eredmeny = szam1 + szam2;
    console.log("a ket szam osszege: "+eredmeny);
  } else {
    console.log("error: nem szamokat kaptam") ;
  }
}

//camelCasing = mindenMasodikSzotNagyBetuvelKezdek
function convertToNumber(szam1, szam2) { // szam1, szam2 > a convertToNumber fgv bemeneti értékei. 
    szam1 = parseInt(szam1);   // parseInt fgv szamma alakitja amit beadok neki
    szam2 = parseInt(szam2);     
    if (isNaN(szam1)) {
      szam1 = 0; 
    }
    if (isNaN(szam2)) {
      szam2 = 0; 
    }
  return [szam1, szam2]; // a fugveny visszateresi erteke
}




let eredmenyek = convertToNumber(2, "34");
console.log(eredmenyek)

// function statementet hasznalunk:
function pontosIdo() {
  let ido = 5; // lokális változó, csak a fügvényen belül van értelme
  let honap = "januar"; // string
  function pontosDatum() {
    let datum = "hetfo"; // string
    console.log("a pontos ido:"+honap+", "+datum+", "+ido+" óra");
  }
  pontosDatum(); // meghívjuk a pontosDatum függvényt 
} // pontosIdo eddig fgv eddit tart

pontosIdo();
// console.log(ido); // az ido valtozo itt nem letezik
// pontosDatum(); // a pontosDatum fugveny itt nem letezik!!


// function expression-t hasznalunk:
let pontosIdo2 = function() {
  let ido = 5; // lokális változó, csak a fügvényen belül van értelme
  let honap = "januar"; //ezt a változót a belső fügvény is látja!!!!
  let pontosDatum2 = function() {
    let datum = "hetfo";
    console.log("a pontos ido:"+honap+", "+datum+", "+ido+" óra");
  }
  pontosDatum2();
}

// CLOSURE: a function can also access variables defined outside the function
// CLOUSURE: egy fügvény, ha egy másik fügvényben van benne, akkor a külső fügvény változóihoz
// hozzá fér a belső fügvény.

pontosIdo2();


let szamHozzaadas = function() {
  let szam1 = 5; 
  return function(n) {
    return szam1+5; 
  };
}(); // létrehozok egy fugvényt, és azonnal meghivom
//  "immediately invoked function expression": IIFE

console.log("Szám hozzáadás: "+szamHozzaadas(5) );



// ------------------------Objektumok------------------------


// adattípusok: number,string,array,bool,NaN,

let myObject = {}
console.log(typeof (myObject)); // a typeof fgv, az array típusú elemek esetén is, objected ad vissza

let player = {
  "name": "John", // kulcs, érték párok (key:name, value: John)
  "health": 100,
  "alive": true
}
console.log("az uj jatekos neve: "+player.name);
let shot = Math.floor((Math.random() * 200 ) + 1); // veletlenszeru szam 1 - 200 kozott 
if (player.alive) {
  console.log(shot+"-al meglöttük "+player.name+"-t");
  player.health = player.health - shot;
  if (player.health < 0) {
    player.alive = false;
  }
}
if (!player.alive) { // ez ugyanaz mintha azt mondanám hogy > player.alive === false // a ! jel megadást jelent
  console.log(player.name+" is dead!!!");
} else {
  console.log(player.name+" is alive!!!YEEE");
}

for (let key in player) { // this is how you loop trough an object by key
  console.log("checking : "+key+" ...");
  console.log(key+" értéke: "+player[key]);
}

let animals = [

{neve: "Buffy", fajtaja:"macska"},
{neve: "Fluffy", fajtaja:"kutya"},
{neve: "Barni", fajtaja:"macska"},
{neve: "Jago", fajtaja:"madar"},
{neve: "Lori", fajtaja:"madar"},
{neve: "Cirmi", fajtaja:"macska"}
]
console.log("===========all animals========\n");
console.log(animals);

let kutyak = []
// az animalss tombon végig megyünk , es a tömb aktualis eleme az animal valtozo lesz, NINCS INDEX
// req EcmaScript 2015+
for( let animal of animals) { // egy animal valtozo fogja tartalmazni az animals tomb aktualis elemet
  // lehetne let animal in animals, de az objectre, nem tömbre!!
  if(animal.fajtaja === "kutya") {
    kutyak.push(animal) // tomb végére hozzáfűzök egy elemet
  }
}

console.log("=========all dogs===========\n");
console.log(kutyak);

player.level = 1; // kibővítettük a player objectet egy propertyvel
console.log(player.name+" jatekos szintje: "+player.level);
player.levelup = function() {
  player.level = player.level + 1;

}

player.levelup()
console.log(player.name+" jatekos szintje: "+player.level);

for (let key in player) { // this is how you loop an object by key
  console.log("checking : "+key+"  ...")
  console.log(key+" értéke: "+player[key]);
}

// functional proggraming
// #learnabaout https://www.youtube.com/watch?v=BMUiFMZr7vk

kutyak = []
kutyak = animals.filter(function(animal)   {
  return animals.fajtaja === "kutya"; // csak akkor adom vissza a tömb elemét ha a fajtája kutya 
})

console.log("====ALL DOGS====")
console.log(kutyak);


let kutyaE = function() {
return animals.fajtaja === "kutya";
}

kutyak = animals.filter(kutyaE)


// javascript object ES5 -- EchmaScript 2014 régi

let Cat = function(name) {
  this.name = name; 
  this.color = "black";
  this.walk = function () {
   return console.log(this.name+" is walking ....");
  }
  this.meow = function () {
    return console.log(this.name+" says: MEOWWWW!!");
  }
  Object.defineProperty(this, 'legscount',{
    value: 4,
    writable: false,
    enumerable: false, // amikor végig loopzok az objecten, akkor kiirja e ezt a parametert
    configurable: true, // modosíthatoak e ezek a paraméterek
  });
}
// ha a prototypehoz adju khozzá a fgv-t akkor nem fogja minden objektum példányra ezt lemásolni
// ez hatékonyabb 
Cat.prototype.purr = function() { 
  return console.log(this.name+" says: MÉG TÖBB STADIONT!!");
}


let cat1 = new Cat("Cirmi");
console.log(cat1.name+" szine: "+cat1.color);
cat1.color = "white" ;
console.log(cat1.name+" szine: "+cat1.color);

console.log(cat1.name+" lábainak száma: "+cat1.legscount);
// cat1.legscount = 5 // nem modosíthato alegscount alegscount ez a sor hibát okoz

cat1.meow();
// cat1.meow = "hi"; // ez el bassza a meow fuggvewnxt

let cat2 = new Cat("Orbán Viktor");
cat2.meow();
cat2.purr();
cat1.purr();
console.log(Object.keys(cat1)); // purr itt azért nincs mert az a  Cat.prototypehoz lett hozzáadva, és nem  másolodik let a cat1be


// object inheritance: objektum öröklödés

let mutantCat = function(name) {
  Cat.call(this, name); 
  Object.defineProperty(this, 'legscount', {
    value: 4,
    writable: true,
    enumerable: true,
    configurable: true
  });
};

// prototype is an encaplutin of property that an object links to.
mutantCat.prototype = Object.create(Cat.prototype);
mutantCat.prototype.constructor = mutantCat;

let mutantCat1 = new mutantCat("Simicska Lajos");
mutantCat1.legscount = 6;
console.log(mutantCat1.name+" lábainak száma: "+mutantCat1.legscount);
console.log(Object.keys(mutantCat1))


// -------------- Object Creation ES6, Echmascript2015 ----------//

class Dog {
  constructor(name) { // ez a fgv automatikusan lefut, amikor létrehozunk egy objektum példányt
    this.name = name;
    Object.defineProperty(this, 'legscount', {
      value: 4,
      writable: false,
      enumerable: true,
      configurable: true
    });
} // constructor vége
bark () {
  console.log(this.name+" ugat: VAU VAU!!!!!");
  }
}
let dog1 = new Dog("Max");
dog1.bark();
// dog1.legscount = 6;
console.log(dog1.name+" lábainak száma: "+dog1.legscount)



class MutantDog extends Dog {
  constructor(name) {
    super(name)
    Object.defineProperty(this, 'legscount', {
      value: 4,
      writable: true,
      enumerable: true,
      configurable: true
  });
  }
  speak() {
    console.log(this.name+" beszélni is tud");
  }
};

let mutantDog1 = new MutantDog("Mutáns Kutya");
mutantDog1.bark();
mutantDog1.legscount = 67;
console.log(mutantDog1.name+" lábainak száma: "+mutantDog1.legscount)
mutantDog1.speak();






























