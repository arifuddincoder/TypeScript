// 1. **What is Encapsulation? Explain it with an example.
//     In a class, what things can be encapsulated?**
//    🔹 **Encapsulation কী? একটি উদাহরণসহ ব্যাখ্যা করো।
//        একটি ক্লাসে কোন কোন জিনিস encapsulate করা যায়?**

class BankAccount {
	// ✅ private → বাইরের থেকে সরাসরি অ্যাক্সেস করা যাবে না
	private _balance: number;

	constructor(initialBalance: number) {
		this._balance = initialBalance;
	}

	// ✅ Getter → balance পড়তে পারবে
	get balance(): number {
		return this._balance;
	}

	// ✅ Method → balance নিরাপদে পরিবর্তন করার জন্য
	deposit(amount: number): void {
		if (amount > 0) {
			this._balance += amount;
		} else {
			throw new Error("Invalid deposit amount");
		}
	}

	withdraw(amount: number): void {
		if (amount <= this._balance) {
			this._balance -= amount;
		} else {
			throw new Error("Insufficient funds!");
		}
	}
}

const account = new BankAccount(1000);

console.log(account.balance); // 1000
account.deposit(600); // balance = 1600
console.log(account.balance); // 1500
// account._balance = 99999;  // ❌ Error → সরাসরি অ্যাক্সেস করা যাবে না (Encapsulation)
