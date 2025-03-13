// add types
function processInput(input) {
	if (typeof input === "string") {
		return input.length;
	}
	return input * 2;
}

// cover max number of "value" types
function formatValue(value) {
	return `Formatted: ${value}`;
}

// define TypeScript interfaces for Person and Employee, then combine them into a single type.
const worker = {
	name: "John",
	age: 30,
	employeeId: 1234,
	department: "IT",
};

// the follwoing function should support both number and string
// and should be callable as `add(5, 10);` or `add('a', 'b');`
function add(a, b) {
	return `${a} : ${b}`;
}

// use generics to return a correct type
function getFirstElement(arr) {
	return arr[0];
}
const firstNumber = getFirstElement([1, 2, 3]);
const firstString = getFirstElement(["a", "b", "c"]);

// use generics for correct class property
class Box {
	constructor(value) {
		this.value = value;
	}

	getValue() {
		return this.value;
	}
}
const numberBox = new Box(100);
const stringBox = new Box("Hello");

