// primitives

const myName: string = "Alice";

const myAge: number = 20;

const isMarried: boolean = false;

const oneHundred: bigint = BigInt(100);

const token: symbol = Symbol("token");


// arrays and tuples
const myArray: number[] = [1, 2, 3];

const myArrayOfArrays: number[][] = [[1], [2], [3]];

const myTuple: [string, number, boolean] = ['name', 20, true];

const myComplexTuple: [string, number[], boolean] = ['name', [20, 1], true];

// inference
let smth = 3;
// smth = 'three';

const array = [0, 1, new URLSearchParams(), null];

function showSmth(x) {
  console.log(x);
}


// any
let something: any = 2;

something = { person: { name: 'Alice' } };

const age: number = something.person.name;

console.log(something.age.subAge.value);

let dontKnowWhat = something.age.subAge.value();

console.log(dontKnowWhat.age.subAge.value);


// functions
function getGreeting(name: string): string {
  return "Hello, " + name.toUpperCase() + "!!";
}

function log(...args: string[]): void {}

function waitAndExecute(timeout: number, fn: () => void) {
  setTimeout(fn, timeout);
}

const addFn: (a: number, b: number) => number = (a, b) => a + b;


// object types
function printCoords(point: { x: number; y: number }) {
  console.log("The coordinate's x value is " + point.x);
  console.log("The coordinate's y value is " + point.y);
}
printCoords({ x: 3, y: 7 });


// union type
let id: number | string = 1;
id = 'I_HATE_TS';

let everything: number | null | string[] | { a: string; b: string } = 23;

// working with union types
function sort(order: number | string) {
  // order.toUpperCase();
}

function parseQuery(query: string | string[]) {
  if (typeof query === 'string') {
    query.toUpperCase();
  } else {
    query.sort();
  }
}


// type alias
type Point = {
  x: number;
  y: number;
};

type ID = number | string;
type Order = 'asc' | 'desc';

type UserInputSanitizedString = string;
function sanitizeInput(str: string): UserInputSanitizedString {
  return str.replace('a', 'b');
}

// Intersection Type
type BasicProfile = {
  name: string;
  email: string;
};

type AdditionalProfileData = {
  job: string;
  age: number;
};

type Profile = BasicProfile & AdditionalProfileData;

// interface
interface IPoint {
  x: number;
  y: number;
  add(a: IPoint, b: IPoint): IPoint;
}

interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}


// type assertion
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// allows only more specific or less specific version of a type
const x = "hello" as number;
// but ...
const x2 = "hello" as unknown as number;


// enum
enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

// generics
function getArrayOf<T>(a: T): T[] {
  return [a];
}

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
// cannot infere
// combine([1, 2, 3], ["hello"]);

function getLongest<Type extends { length: number }>(a: Type, b: Type) {
  return a.length >= b.length ? a : b;
}


// unknown
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b();
}

function safeParse(s: string): unknown {
  return JSON.parse(s);
}
// Need to be careful with 'obj'!
const obj = safeParse('{sdcsdc: asdasd}');


// never
function fail(msg: string): never {
  throw new Error(msg);
}

function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}
