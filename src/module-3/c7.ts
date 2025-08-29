{
	// ** 1. What are statics in TypeScript OOP? Explain with examples.
	//     Why doesn’t the `this` keyword work in this context?**
	//    🔹 **TypeScript OOP-এ statics কী? উদাহরণসহ ব্যাখ্যা করো।
	//        এই ক্ষেত্রে কেন `this` কীওয়ার্ড কাজ করে না **

	class Counter {
		// static property → সব instance মিলেই শেয়ার করবে
		private static count: number = 0;

		// ✅ static method → count বাড়ানো
		static increment(): number {
			return ++Counter.count;
		}

		// ✅ static method → count কমানো
		static decrement(): number {
			return --Counter.count;
		}

		// ✅ static method → বর্তমান মান পাওয়া
		static getCount(): number {
			return Counter.count;
		}
	}

	// 🔹 instance বানানোর দরকার নেই, সরাসরি class থেকে ব্যবহার করা যায়
	console.log(Counter.getCount()); // 0 (শুরুতে)
	console.log(Counter.increment()); // 1
	console.log(Counter.increment()); // 2
	console.log(Counter.decrement()); // 1
	console.log(Counter.getCount()); // 1
}
{
	//  **Static কী?
	// Static property বা method হলো এমন কিছু যা class-এর সাথে যুক্ত থাকে, কিন্তু কোনো instance (object) তৈরি না করেও ব্যবহার করা যায়।
	// static কীওয়ার্ড দিয়ে define করা হয়।
	// কল করতে হয় ClassName.member দিয়ে, যেমন Counter.getCount()।
	// সাধারণত utility ফাংশন, গ্লোবাল কাউন্টার, বা class-লেভেল data রাখার জন্য ব্যবহার করা হয়।
	// **কেন this কাজ করে না?
	// Static method/property instance-এর অংশ নয়। তাই static context-এ this কোনো অবজেক্টকে নির্দেশ করে না।
	// এজন্য সরাসরি this.count ব্যবহার করা যায় না → বরং Counter.count লিখতে হয়।
}
