{
	// 1. **What are Getters and Setters? Explain with examples.**
	//    🔹 **Getter এবং Setter কী? উদাহরণসহ ব্যাখ্যা করো।**

	class BankAccount {
		private _balance: number;

		constructor(initialBalance: number) {
			this._balance = initialBalance;
		}

		// ✅ Getter → property পড়ার জন্য
		get balance(): number {
			return this._balance;
		}

		// ✅ Setter → property নিরাপদে পরিবর্তনের জন্য
		set balance(amount: number) {
			if (amount < 0) {
				throw new Error("Balance cannot be negative!");
			}
			this._balance = amount;
		}
	}

	const account = new BankAccount(1000);

	console.log(account.balance); // Getter call → 1000

	account.balance = 1500; // Setter call
	console.log(account.balance); // 1500

	// account.balance = -500;    // ❌ Error: Balance cannot be negative
}

{
	// Getter: A special method that allows you to read a private property as if it were a normal property.
	// Setter: A special method that allows you to safely update a private property, often with validation.
	// Use Case: Encapsulation → you don’t expose the property directly, but control access through getter/setter.
}
{
	//   Getter: এটি এমন একটি method, যেটি ব্যবহার করে তুমি কোনো private property read করতে পারো, কিন্তু property-টা সরাসরি বাইরে থেকে অ্যাক্সেস করতে হয় না।
	// Setter: এটি এমন একটি method, যেটি দিয়ে তুমি private property-কে update/change করতে পারো, কিন্তু চাইলে ভেতরে validation যোগ করতে পারবে।
	// ব্যবহার: Encapsulation বজায় রাখতে Getter এবং Setter ব্যবহার করা হয়।
}
