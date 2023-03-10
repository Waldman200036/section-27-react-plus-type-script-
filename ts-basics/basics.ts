// Primitives: number, string, boolean

// Primitives

let age: number;

age = 12.1;

let userName: string| string[];

userName = "Max";

let isIntructure: boolean;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: Person[];

//Type inference

let course: string | number = "React- The complete Guide";

course=1234;

// Functions & types

function add(a:number,b:number):number | string {
  return a+b;
}

function printOutput(value:any){
  console.log(value)
}

//Generics

function insertAtBeginning<T>(array:T[], value:T){
  const newArray =[value,...array];
  return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1)// [-1,1,2,3]

const stringArray = insertAtBeginning(['a','b','c'],'d')
//updatedArray[0].split('');