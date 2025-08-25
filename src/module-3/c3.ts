// ## 📚 3.3: Type guard using typeof & in

// 1. **Let's say you send two numbers/strings to a function, and you want to concatenate them in TypeScript. How can you do it? In this function, how can you use a type guard? How many types of guards are there in TypeScript? Explain with examples in a function.**
//    🔹 **ধরা যাক, তুমি একটি ফাংশনে দুইটি সংখ্যা/স্ট্রিং পাঠাবে এবং সেগুলোকে TypeScript-এ concatenate করতে চাও। এটি কীভাবে করা যায়? সেই ফাংশনে কীভাবে type guard ব্যবহার করবে? TypeScript-এ কয় ধরনের guard আছে? একটি ফাংশনের মাধ্যমে উদাহরণসহ ব্যাখ্যা করো।**

{
	type common = string | number;

	const concatTwoItem = (param1: common, param2: common): common => {
		if (typeof param1 === "number" && typeof param2 === "number") {
			return param1 + param2;
		} else {
			return param1.toString() + param2.toString();
		}
	};

	console.log(concatTwoItem(2, 3));
	console.log(concatTwoItem("2", "3"));
}

{
	// in guard

	type teacher = {
		name: string;
		profession: string;
	};

	type student = {
		name: string;
		roll: number;
	};

	type common = teacher | student;

	const getData = (person: common) => {
		if ("profession" in person) {
			return `His name is ${person.name} and his profession is ${person.profession}`;
		} else if ("roll" in person) {
			return `His name is ${person.name} and his roll no. ${person.roll}`;
		}
	};

	const teacher1: teacher = {
		name: "kamal",
		profession: "teacher",
	};

	console.log(getData(teacher1));
}
