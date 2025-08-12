{
	//**1. Write an object for a user who has `companyName`, `firstName`, `middleName`, `lastName`, and `isMarried`.How to define it explicitly? Let's say someone doesn’t have `middleName` — how to make it optional?**

	//TypeScript-এ explicit type definition মানে হচ্ছে আমরা object-এর প্রতিটি property-র type আগে থেকেই ঠিক করে দেব। আর কোনো property optional করতে চাইলে তার নামের পরে ? দিতে হয়।

	// Explicit type definition
	type User = {
		companyName: string;
		firstName: string;
		middleName?: string; // optional
		lastName: string;
		isMarried: boolean;
	};

	// Object without middleName
	const user1: User = {
		companyName: "TechNova",
		firstName: "Arif",
		lastName: "Uddin",
		isMarried: false,
	};

	// Object with middleName
	const user2: User = {
		companyName: "TechNova",
		firstName: "John",
		middleName: "Edward",
		lastName: "Doe",
		isMarried: true,
	};

	//**2. What is literal types? How can you make `companyName` a literal type?**
	/*
Literal Types মানে হচ্ছে type হিসেবে নির্দিষ্ট একটি মান।
অর্থাৎ, variable বা property শুধু সেই মানটাই নিতে পারবে — অন্য কিছু দিলে TypeScript error দেবে।

এটা তিনভাবে হতে পারে:

String Literal Types

Number Literal Types

Boolean Literal Types
*/

	type User = {
		companyName: "TechNova"; // Literal Type
		firstName: string;
		lastName: string;
	};

	const user1: User = {
		companyName: "TechNova", // ✅ সঠিক
		firstName: "Arif",
		lastName: "Uddin",
	};

	// ❌ ভুল — অন্য মান দিলে error
	const user2: User = {
		companyName: "OtherCompany", // ❌ Type '"OtherCompany"' is not assignable to type '"TechNova"'
		firstName: "John",
		lastName: "Doe",
	};

	let luckyNumber: 7;
	luckyNumber = 7; // ✅
	luckyNumber = 8; // ❌ Error

	let isMarried: true;
	isMarried = true; // ✅
	isMarried = false; // ❌ Error
}
