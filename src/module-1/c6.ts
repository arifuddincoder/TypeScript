{
	//  ** 1. How do you write a normal function and an arrow function in TypeScript?**
	//    📘 _বাংলায়: TypeScript-এ সাধারণ ফাংশন এবং অ্যারো ফাংশন কীভাবে লেখা হয়?_

	//TypeScript-এ ফাংশন লেখার সময় আপনাকে টাইপ ডিক্লেয়ার করতে হয় (প্যারামিটার ও রিটার্ন টাইপ)।

	function add(a: number, b: number): number {
		return a + b;
	}

	console.log(add(5, 3)); // Output: 8

	const multiply = (x: number, y: number): number => {
		return x * y;
	};

	console.log(multiply(4, 2)); // Output: 8

	// ** 2. How do you explicitly declare the return type of a function in TypeScript?**
	//  📘 _বাংলায়: TypeScript-এ কোনো ফাংশনের রিটার্ন টাইপ কীভাবে স্পষ্টভাবে (explicitly) ঘোষণা করবেন?

	//TypeScript-এ কোনো ফাংশনের return type স্পষ্টভাবে (explicitly) ঘোষণা করতে হলে, ফাংশনের প্যারামিটার লিস্টের পরে : দিয়ে টাইপ লিখতে হয়।
	// ফাংশনটি number রিটার্ন করবে
	function add(a: number, b: number): number {
		return a + b;
	}

	// ফাংশনটি string রিটার্ন করবে
	function greet(name: string): string {
		return `Hello, ${name}!`;
	}

	// ফাংশনটি কিছুই রিটার্ন করছে না (void)
	function logMessage(message: string): void {
		console.log(message);
	}

	// ** 3. What is the `this` keyword in functions, and in which situations does it not work as expected?**
	//  📘 _বাংলায়: ফাংশনের মধ্যে `this` কী, এবং কখন এটি সঠিকভাবে কাজ করে না?_

	// this হলো একটি বিশেষ keyword যা function বা object context নির্দেশ করে।
	// অর্থাৎ, কে ফাংশনটি কল করেছে সেটার উপর নির্ভর করে this ঠিক হয়।

	const person = {
		name: "Arif",
		greet: function () {
			console.log(this.name);
		},
	};

	const fn = person.greet;
	fn(); // 👉 undefined (কারণ এখন this হলো global / undefined)

	const person = {
		name: "Arif",
		greet: () => {
			console.log(this.name);
		},
	};

	person.greet(); // 👉 undefined (Arrow function নিজের `this` bind করে না)

	// 	3. Event handler-এ
	// DOM event-এ this প্রায়ই element কে নির্দেশ করে, কিন্তু strict mode বা TypeScript-এ এটি undefined হয়ে যেতে পারে।

	// ** 4. What is a method in TypeScript, and how do you define one to demonstrate your understanding?**
	//  📘 _বাংলায়: TypeScript-এ মেথড কী, এবং শেখানোর জন্য একটি মেথড কীভাবে লিখবেন?_

	// 	TypeScript-এ Method কী?

	// Method হলো কোনো class-এর ভেতরে ডিফাইন করা একটি ফাংশন।

	// এটি সাধারণ ফাংশনের মতোই কাজ করে, তবে এটি সরাসরি class-এর object বা instance-এর সাথে সম্পর্কিত হয়।

	// Method সাধারণত object-এর behavior বা কাজ বোঝায়।

	class Person {
		name: string;
		age: number;

		constructor(name: string, age: number) {
			this.name = name;
			this.age = age;
		}

		// 👉 এটি একটি Method
		greet(): string {
			return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
		}
	}

	// অবজেক্ট তৈরি করা হলো
	const person1 = new Person("Arif", 25);

	// Method কল করা হলো
	console.log(person1.greet());
}
