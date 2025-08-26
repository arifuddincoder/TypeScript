{
	// 1. Explain access modifiers with an example (e.g., BankAccount).
	// How can you prevent a property of a class from being changed?
	// How many access modifiers are available in a TypeScript class?
	// Since a bank balance is important, how can you update it safely?
	// What is the naming convention for private properties in a class?
	// In a child class, which properties cannot be accessed?
	// What is the difference between private, protected, and public properties in a class?

	class BankAccount {
		// public → বাইরে থেকে সব জায়গায় access করা যায়
		public accountHolder: string;

		// private → শুধু class-এর ভেতরে access করা যায়
		private _balance: number;

		// protected → class এবং এর child class এর ভেতরে access করা যায়
		protected accountNumber: string;

		constructor(accountHolder: string, accountNumber: string, balance: number) {
			this.accountHolder = accountHolder;
			this.accountNumber = accountNumber;
			this._balance = balance;
		}

		// balance read করার জন্য getter
		get balance(): number {
			return this._balance;
		}

		// balance নিরাপদে update করার জন্য method
		deposit(amount: number): void {
			if (amount > 0) {
				this._balance += amount;
			} else {
				throw new Error("Invalid deposit amount!");
			}
		}

		withdraw(amount: number): void {
			if (amount <= this._balance) {
				this._balance -= amount;
			} else {
				throw new Error("Insufficient balance!");
			}
		}
	}

	// Child class
	class SavingsAccount extends BankAccount {
		showAccountNumber() {
			// ✅ protected property child class এ access করা যায়
			return this.accountNumber;

			// ❌ private property (_balance) এখানে access করা যাবে না
			// return this._balance; // Error
		}
	}

	const account = new BankAccount("Arif", "ACC123", 1000);
	account.deposit(500);
	console.log(account.balance); // 1500
	// account._balance = 10000; // ❌ সরাসরি পরিবর্তন করা যাবে না (private)
}

{
	// **Access Modifiers কত প্রকার?
	// public → ডিফল্ট, সব জায়গা থেকে অ্যাক্সেসযোগ্য।
	// private → শুধু একই ক্লাসের ভেতরে অ্যাক্সেসযোগ্য।
	// protected → ক্লাস এবং এর child ক্লাসের ভেতরে অ্যাক্সেসযোগ্য।
	// **Property পরিবর্তন রোধ করা:
	// private বা readonly ব্যবহার করলে property সরাসরি পরিবর্তন করা যায় না।
	// উদাহরণে _balance private করা হয়েছে, তাই বাইরে থেকে account._balance পরিবর্তন করা যাবে না।
	// Bank balance নিরাপদে update করা:
	// balance সরাসরি পরিবর্তন না করে deposit() বা withdraw() method ব্যবহার করতে হবে।
	// এতে validation যোগ করা যায় (negative deposit বা অতিরিক্ত withdraw আটকানো যায়)।
	// **Private property naming convention:
	// সাধারনত _balance, _password এর মতো আন্ডারস্কোর (_) দিয়ে শুরু করা হয়।
	// **Child class থেকে কোন property access করা যায় না?
	// private property child class থেকে access করা যায় না।
	// কিন্তু protected property child class থেকে access করা যায়।
	// **private, protected, public পার্থক্য:
	// public → সবার জন্য উন্মুক্ত।
	// private → শুধু একই ক্লাসের ভেতরে।
	// protected → একই ক্লাস + child ক্লাসে।
}
