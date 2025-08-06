{
	// What is the difference between Implicit and Explicit Type Hinting in TypeScript?**

	//TypeScript নিজেই টাইপ অনুমান করে নেয় (Type Inference) যখন তুমি টাইপ উল্লেখ করো না।
	let nameImp = "Arif"; // TypeScript বুঝে নিয়েছে এটি string টাইপ
	let ageImp = 25; // এটি number টাইপ

	// তুমি সরাসরি টাইপ উল্লেখ করো ভ্যারিয়েবল বা ফাংশনের ক্ষেত্রে।
	let nameExp: string = "Arif";
	let ageExp: number = 25;
}
