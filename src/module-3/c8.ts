{
	// 1. **What is Polymorphism? Explain it with an example (e.g., Person, Shape).**
	//    🔹 **Polymorphism কী? Person বা Shape-এর মতো উদাহরণ দিয়ে ব্যাখ্যা করো।**

	class Person {
		getSleep(): string {
			return `I am sleeping 8 hours per day.`;
		}
	}

	class Student extends Person {
		getSleep(): string {
			return `I am sleeping 7 hours per day.`;
		}
	}

	class Developer extends Person {
		getSleep(): string {
			return `I am sleeping 6 hours per day.`;
		}
	}

	const getSleepingHour = (param: Person) => {
		return param.getSleep();
	};

	const person1 = new Person();
	const student1 = new Student();
	const developer1 = new Developer();

	console.log(getSleepingHour(person1));
	console.log(getSleepingHour(student1));
	console.log(getSleepingHour(developer1));

	class Shape {
		area(): number {
			return 0;
		}
	}

	class Circle extends Shape {
		public radius: number;
		constructor(radius: number) {
			super();
			this.radius = radius;
		}
		area(): number {
			return 3.1416 * this.radius * this.radius;
		}
	}

	class Rectangle extends Shape {
		width: number;
		height: number;

		constructor(width: number, height: number) {
			super();
			this.width = width;
			this.height = height;
		}

		area(): number {
			return this.width * this.height;
		}
	}

	const shapeArea = (param: Shape): number => {
		return param.area();
	};

	const shape1 = new Shape();
	const circle1 = new Circle(1);
	const rectangle = new Rectangle(5, 5);

	console.log(shapeArea(circle1));
}
{
	//   ✨ English Explanation
	// Polymorphism means “many forms.”
	// In OOP, polymorphism allows different classes (that inherit from the same parent) to provide different implementations of the same method.
	// Example above:
	// All classes have a draw() method.
	// But Shape, Circle, and Rectangle each implement it differently.
	// When we call render(shape), the correct method is chosen at runtime → this is runtime polymorphism.
	// ✨ বাংলা ব্যাখ্যা
	// Polymorphism মানে হলো “অনেক রূপ”।
	// OOP-এ এটি এমন একটি ধারণা যেখানে একই নামের method বিভিন্ন ক্লাসে ভিন্ন ভিন্নভাবে কাজ করে।
	// উপরের উদাহরণে:
	// Shape, Circle, Rectangle—সবারই draw() method আছে।
	// কিন্তু প্রত্যেকে আলাদা রকম আউটপুট দেয়।
	// যখন আমরা render() ফাংশনে যে অবজেক্ট পাঠাই, তার ওপর নির্ভর করে কোন draw() কল হবে তা ঠিক হয় → একে বলে runtime polymorphism।
}
