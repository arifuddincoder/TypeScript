{
	//   ## 📚 3.2: Inheritance in OOP

	// 1. **What is inheritance in OOP? Explain with an example (e.g., Teacher–Student or Father–Son).**
	// 🔹 ** OOP-এ Inheritance কী? একটি উদাহরণসহ ব্যাখ্যা করুন (যেমন: শিক্ষক–শিক্ষার্থী, বাবা–ছেলে)।**

	class Common {
		constructor(public name: string, public address: string) {
			this.name = name;
			this.address = address;
		}

		exercise() {
			return `${this.name} is doing physical activities`;
		}
	}

	class Student extends Common {
		constructor(public name: string, public address: string) {
			super(name, address);
		}
	}

	class Teacher extends Common {
		constructor(public name: string, public address: string, public designation: string) {
			super(name, address);
			this.designation = designation;
		}
	}

	const teacher = new Teacher("Kamal Ahmed", "Nagarbari, tangail", "Professor");
	const student = new Student("Jamal Ahmed", "Maloti, tangail");

	console.log(teacher.exercise());
	console.log(student.exercise());
}
