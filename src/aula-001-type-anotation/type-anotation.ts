/* eslint-disable */

// Basic Types
let nome : string = "Anderson";
let age : number = 7;
let bool : boolean = true;
let symbol : Symbol = Symbol("some-symbol");
//let bigNumber : bigint = 10n;

// Arrays
let arrayOfNumbers : Array<number> = [1,2,3];
let arrayOfNumbers2 : number[] = [1,2,3];
let arrayOfStrings: Array<string> = ["Anderson", "Aslap"];
let arrayOfStrings2: string[] = ["Anderson", "Aslap"];

// Objects
let people : {name: string, age: number, young?:boolean } = {
  name : "Anderson",
  age : 23,
  young : true
}

// Functions
function soma(numberOne: number, numberTwo: number) : number{
  return numberOne + numberTwo;
}

const soma2 : (numberOne: number, numberTwo: number) => number = (numberOne, numberTwo) => numberOne + numberTwo;
