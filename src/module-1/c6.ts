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
}
