{
	// **What is the difference between Implicit and Explicit Type Hinting in TypeScript?**

	//TypeScript নিজেই টাইপ অনুমান করে নেয় (Type Inference) যখন তুমি টাইপ উল্লেখ করো না।
	let nameImp = "Arif"; // TypeScript বুঝে নিয়েছে এটি string টাইপ
	let ageImp = 25; // এটি number টাইপ

	// তুমি সরাসরি টাইপ উল্লেখ করো ভ্যারিয়েবল বা ফাংশনের ক্ষেত্রে।
	let nameExp: string = "Arif";
	let ageExp: number = 25;

	// **What is Optional Type Hinting in TypeScript? Describe with examples.**
	//Optional Type Hinting মানে হলো – TypeScript এ কোন প্রপার্টি বা প্যারামিটার আবশ্যক নয় (optional), অর্থাৎ সেটি থাকতেও পারে, না-ও থাকতে পারে।

	interface User {
		name: string;
		email?: string; // Optional
	}

	const user1: User = { name: "Arif" }; // ✅ Valid
	const user2: User = { name: "Rafi", email: "rafi@gmail.com" }; // ✅ Valid

	function greet(name: string, age?: number): string {
		if (age !== undefined) {
			return `Hello, ${name}. You are ${age} years old.`;
		}
		return `Hello, ${name}.`;
	}

	console.log(greet("Arif")); // ✅ Hello, Arif.
	console.log(greet("Arif", 25)); // ✅ Hello, Arif. You are 25 years old.

	// **What are Literal Types in TypeScript? Explain with examples.**
	//Literal Type হলো এমন এক ধরনের টাইপ যেটি নির্দিষ্ট একটি মান কেবলমাত্র গ্রহণ করতে পারে।

	let theme: "dark" | "light";

	theme = "dark"; // ✅ Valid
	theme = "light"; // ✅ Valid
	theme = "blue"; // ❌ Error: 'blue' is not assignable

	//**Why you should not use implicit data types / optional data hinting?**
	//TypeScript কখনো কখনো ভুল টাইপ ধরে নিতে পারে
	//কোডে টাইপ পরিবর্তন করলে আগের ইনফারেন্স ভুল হয়ে যেতে পারে
	//কোন টাইপে বাগ হচ্ছে তা ধরা কঠিন হয়
	//অন্য ডেভেলপার বুঝবে না ভ্যারিয়েবল আসলে কী টাইপের

	//**How to write array in TypeScript for strings array and for numbers?**
}
