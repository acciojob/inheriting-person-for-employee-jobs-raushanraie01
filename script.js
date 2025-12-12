// complete this js code
function Person(name, age) {
	
		this._name=name;
		this._age=age;
	
	Person.prototype.greet(){
		console.log(`Hello, my name is ${this._name}, I am ${this._age} years old.`)
	}
}

function Employee(name, age, jobTitle) {
    Person.call(this, name, age);  // inherit properties
    this.jobTitle = jobTitle;
}

// inherit Person prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function () {
    console.log(
        `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
