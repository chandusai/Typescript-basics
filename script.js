// variable delcaration

// var, let , const

// strings

let name = "chandu";

name = "mahendra";

console.log(name);

const name1 = "mahendra davuluri";

// name1 = "chandu movva";

console.log(name1);

var name2 = "Akhil";
name2 = "champak";
console.log(name2);

// var vs let

console.log(ch);
var ch = 5;
console.log(ch);

// console.log(ch1);
// let ch1 = 10;
// console.log(ch1);
var boo = "boo";
function run() {
	var boo = "champ";

	console.log(boo);
}
//console.log(bar, boo);
run();

console.log(boo);

// Datatypes
// primitves
// string, Number, boolean, undefined,null,symbol
// Reference
// Arrays,Objects, Functions
// string

let greeting = "Hello mahendra";
greeting = "Hello chandu";

let obj = {
	name: "mahendra",
	age: 30,
	email: "mahendra@123.com",
};

let obj2 = { ...obj };
obj2.name = "chandu";
console.log(obj2);
console.log(obj);

// Number

let a = 1,
	b = 2;

// Boolean
let c = true;
let d = false;

//undefined

let chandu; // undefined nothing but does not have avalue;

//null
let email = null;

//typeOf

console.log(typeof "");
console.log(typeof false);
console.log(typeof 40);
console.log(typeof undefined);
console.log(typeof null);
//The reasoning behind this is that null, in contrast with undefined,
//was (and still is) often used where objects appear. In other words,
//null is often used to signify an empty reference to an object.
// When Brendan Eich created JavaScript, he followed the same paradigm, and it made sense (arguably)
// to return "object". In fact, the ECMAScript specification defines null as the primitive value
//that represents the intentional absence of any object value (ECMA-262, 11.4.11).

// conversion to string

let num = 5;
let foo = true;

console.log(num.toString());
console.log(typeof num.toString());
console.log(foo.toString());
console.log(typeof foo.toString());

// conversion to boolean
//!!
let message = "Helloo";
let zero = 0;
console.log(!!message);
console.log(!!0);

// falsy
// 0,  "",null,undefined,NAN,false

//Conversion to Number

let firstName = "Chandu";
let lastName = "Movva";
let dec = "2.34";
console.log(Number(dec));
console.log(+dec);
console.log(parseInt(dec));
//parseInt-- to convert decimal to integer

// Boolean logic

// let fruits = "3";
// if (fruits == 3) {
// 	console.log(true);
// } else {
// 	console.log(false);
// }

// <,<=,>,>=,!,!=,!==
console.log("t");
console.log(!!false); //f
console.log(!!-1); //T
console.log(!!-0); //f
console.log(!![]); //T
console.log(!!{}); //T
console.log(!!""); //f
console.log(!!null); //f
console.log(!!0); //f

console.log(false || "dog");
console.log(0 || "dog");
console.log([] || "dog");
console.log(true || "dog");
console.log(-1 && 1);

let num3 = 10;
let num4 = 20;

// if (num3 % 3 === 0 || num3 % 5 !== 0) {
// 	console.log(`${num3} is divisible by 3`);
// } else if (num3 % 3 !== 0 && num3 % 5 === 0) {
// 	console.log(`${num3} is divisible by  5`);
// } else if (num3 % 3 === 0 && num3 % 5 === 0) {
// 	console.log(`${num3} is divisible by  3 and 5`);
// } else {
// 	console.log(`${num3} is  not divisible by 3 and 5`);
// }

// switch

switch (num3 > num4) {
	case true:
		console.log(`${num3} is divisible by 3 and 5`);
		break;

	case false:
		console.log(`${num3} is divisible by 3`);
		break;

	default:
		console.log("not divisible by both 3 and 5");
		break;
}

// true && flase;
// false//true;
// true|| false
console.log(true && false);
console.log(true || false);
console.log(false || true);

// Arrays

// let fruit1 ="Apple ";
// let fruit 2 ="Banana"

// Arrays can be defined in two ways

// -- [];
// -- new Array();

let primes = [2, 3, 5, 7];
let names = ["Mahendra", "chandu"];

console.log(primes);

// Arrays are zero indexed

primes[0];
primes[1];
primes[4] = 11;

console.log(primes);

// Adding the elements/
// push method
// Add the elements in end of the array
primes.push(17, 13);
console.log(primes);

// unshift method -- add the elements at the begining of the array

primes.unshift(0, -1, -2);
console.log(primes);

// Deleting  the elements in an array/
// delete, shift, pop

console.log(names.length);
console.log(delete names[0]);
console.log(names);

// pop delete the elements from the end of an array;

names.push("charles", "bob", "leo");
console.log(names);
names.pop();
console.log(names);

// shift delete the elements from the begining of an array
names.unshift("davu", "ana", "sally");
console.log(names);
names.shift();
console.log(names);

// For both removing, deleting the elements of an array --splice
// splice(0,4)
// takes two parameters -- first parameter is to starting index indicating where the values will be removed or added
// second paramter -- number of values to be removed
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(2, 4, "a", "b", "c", "d"));
console.log(arr);

let evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18];
console.log(
	evenNumbers.splice(
		4,
		8,
		20,
		40,
		60,
		80,
		100,
		120,
		140,
		160,
		180,
		220,
		240,
		260
	)
);
console.log(evenNumbers);

let randomnumbers = [2, 3, 4, 5];

console.log(randomnumbers.splice(1, 1, "alpha", "beta"));
console.log(randomnumbers.splice(2));

let vehicles = ["car", "van", "bike", "truck", "auto"];
console.log(vehicles.splice(0, 6, "you", "have", "deleted", "elements"));
console.log(vehicles);

// Splice is used to add & delete the elements in an array which accepts the two parameters ,first parameter is the index of the array , second parameter is the number of elements to be removed from an array & added the elements after the second argument.
//  splice method returns the deleted elements of an array.

// Common array functions

// Length -- returns the length of an array
console.log(vehicles.length);

// Slice

// slice method creates an copy of an array

let sweets = ["a", "b", "c", "d"];

let newsweets = sweets.slice(0, 3);
console.log(sweets);
console.log(newsweets);

let cities = ["CA", "AZ", "TX", "Iowa", "GE", "CH"];

// let expensiveCities = cities.slice(3);

// concat

let student1 = ["Ram", "Xu", "pet"];
let student2 = ["Alex", "sky", "Neel"];

let student = student1.concat();
console.log(student);

// join

// join method joins an array in to a string separated by the paramter which we passed in to the join method
let movies = ["Aha", "oho", "Ha", "Hu"];
console.log(movies.join("!"));
console.log(movies.join(2, 3));

// indexOf
// indexOf method find the firstindex of the element (starting from left side), if the element is not found returns -1.
if (movies.indexOf("cccc") > -1) {
	console.log("I know this movie");
} else {
	console.log("I don't know this movie");
}

//lastindexOf;
console.log(movies.lastIndexOf("Aha"));

// Array methods

// Primitives vs reference

let instructor1 = "John";
let instructor2 = instructor1;

instructor1 = "Hemp";
console.log(instructor1);
console.log(instructor2);

let teachers = ["john", "deep", "mark", "peter"];
let instructor3 = teachers;
console.log(instructor3);
instructor3.push("Alex");
console.log(teachers);
console.log(instructor3);

let vapes = {
	brand: "Smok",
	model: "novo",
	price: 35,
};
console.log(vapes);
let vape2 = vapes;
console.log(vape2);
vape2.brand = "Vapresso";
vape2.model = "Xros";
vape2.price = 40;
console.log(vapes);
console.log(vape2);

// Array exercises

let emptyArray = [];

emptyArray.push("Mahendra", "Davuluri");
emptyArray.unshift("Blue");
console.log(emptyArray);
emptyArray.splice(0, 3, 42, "JS", "TS");

console.log(emptyArray);

let skillCheck = emptyArray.indexOf("TS");
if (skillCheck > -1) {
	console.log(true);
} else {
	console.log(false);
}

let skills = ["DB", "MB", "CB"];

let arrayMerge = skills.concat(emptyArray);
console.log(arrayMerge);

let languages = ["JavaScript", "Python", "Ruby", "Java"];
console.log(languages.join("!"));

// Arrays iteration

// for(intializer;conditon; counter)
let i = 0;

// for (i; i < 10; i += 3) {
// 	console.log(i);
// }

// While ()
while (i < 0) {
	console.log(i);
	i++;
}

let j = 0;
do {
	console.log(j);
	j++;
} while (j < 0);

// for of

let snacks = ["mirchi", "pakora", "chilli"];
for (let i = 0; i < snacks.length; i++) {
	console.log(snacks[i]);
}

for (let snack of snacks) {
	console.log(snack);
}

// includes

let dummy = [, , , ,];
console.log(dummy.includes(undefined));

// Objects --

// Objects allow to map the key value pairs

let model = {
	brand: "Tesla",
	name: "2019 EV",
	price: 70000,
	location: "Fremont",
};

console.log(model.brand, model.name, model.price);
console.log(model["brand"], model["name"], model["price"]);

let obj1 = {};
let person = "Tim";

obj1[person] = "Hey this is tim";
obj1[5 + 3 + 5] = "This is a number";

console.log(obj1.person);

// To access the object we use two notations [], . notation , When you know the name of the key and it's not a variable or expression

// [] is used to evaluate an expression or pass a variable to get name of the key

let idToName = {
	754: "Tim",
	843: "Matt",
	921: "Janey",
	192: "Elie",
};

console.log(idToName["754"]);

idToName["256"] = "Mahi";
console.log(idToName);
let moviesToWatch = {
	name: "bb1",
	watchmember: true,
};
moviesToWatch.runtime = 1.89;
console.log(moviesToWatch);

// delete you can remove a key from object
delete moviesToWatch.watchmember;
console.log(moviesToWatch);

let breeds = {
	breed1: "Jeres",
	breed2: "abc",
	breed3: "natu",
	breed4: "ong",
	breed5: "sw",
};

// for -in

// it only gives the values of a object

for (let breed in breeds) {
	console.log(breeds[breed]);
}

// if-in

// to check whether the key is exists in the object or not

if ("breed5" in breeds) {
	console.log("true");
} else {
	console.log("false");
}

let namesAndHobbies = {
	elie: "JavaScript",
	matt: "jogging",
	janey: "table building",
	tim: "sailing",
};

// excepted output
// JavaScript => elie
// jogging => matt
// table building => janey
// sailing => tim

for (let hobbies in namesAndHobbies) {
	console.log(`${namesAndHobbies[hobbies]}=>${hobbies}`);
} //

// if ("elie" in namesAndHobbies) {
// 	console.log("Javascript => elie");
// }

let programming = {
	languages: ["JavaScript", "Python", "Ruby"],
	isChallenging: true,
	isRewarding: true,
	difficulty: 8,
	jokes:
		"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
console.log(programming.languages.push("Go"));
console.log((programming.difficulty = 6));
console.log((programming.unknownlanguages = ["1", "2", "3"]));
console.log(programming);
// if ("languages" in programming) {
// 	for (let languages = 0; languages < 2; languages++) {
// 		console.log(languages);
// 	}
for (s of programming.unknownlanguages) {
	console.log(s);
}
