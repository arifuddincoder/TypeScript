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
}
