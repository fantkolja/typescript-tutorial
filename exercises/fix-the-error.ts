// fix types
function add(a: number, b: number): number {
  return a + b + "0";
}

// fix implementation
const user: { name: string, isAdmin: boolean } = {
  name: "Alice",
  isAdmin: "true"
};

// fix type
interface Person {
  name: string;
  age: number;
}
const person: Person = {
  name: "John"
};


// fix type
function isAdult(age: number): boolean {
  return age >= 18 ? "yes" : "no";
}

// fix type
function getName(user: { name?: string }): string {
  return user.name;
}
getName({});

// fix implementation
enum Colors {
  Red,
  Blue,
  Green
}
let favoriteColor: Colors = "Blue";

// fix types
let value: any = "hello";
let num: number = value as number;

// fix implementation
let data: [number, string] = ["hello", 42];



/*
 * Advanced
 */

// fix formatID function
function formatID(id: string | number): string {
  return id.toUpperCase();
}
console.log(formatID("abc"));
console.log(formatID(123));

// fix implementation
type Person = { name: string };
type Employee = { company: string };

const worker: Person & Employee = { name: "Alice" };

// fix types
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
let firstNumber = getFirst<number>(["hello", "world"]);


// fix implementation
interface User {
  id: number;
  name: string;
  email: string;
}
function updateUser(user: Partial<User>) {
  console.log(user.name.toUpperCase());
}

// add a generic type constraint
function logLength<T>(item: T): number {
  return item.length;
}

console.log(logLength("hello"));
console.log(logLength([1, 2, 3]));
console.log(logLength(42));


// fix types
type Optional<T> = {
  [K in T]: string;
};
type UserKeys = "id" | "name";
let user: Optional<UserKeys> = {};


// FINAL BOSS: add types
function mapValues(obj, fn) {
  let result = {};
  for (let key in obj) {
    result[key] = fn(obj[key]);
  }
  return result;
}

const numbers = { a: 1, b: 2, c: 3 };
const stringified = mapValues(numbers, (n) => n.toString());
const doubled = mapValues(numbers, (n) => n * 2);
