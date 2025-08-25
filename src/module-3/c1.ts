// 1. **How do you write a class in TypeScript? Explain with an example (e.g., Animal). How do you create an instance of the class and print it? How can you add a function to the class and what is it called? Explain with an example. Why should you use a normal function instead of an arrow function inside a class? How can you optimize a class?**
//    🔹 *TypeScript-এ কীভাবে একটি class লিখতে হয়? একটি উদাহরণ দাও (যেমন: Animal)। এরপর কীভাবে সেই class-এর instance তৈরি করে প্রিন্ট করা যায়? কীভাবে class-এর মধ্যে একটি function যোগ করা যায় এবং তাকে কী বলা হয়? উদাহরণসহ ব্যাখ্যা করো। কেন class-এর ভেতরে arrow function না দিয়ে normal function ব্যবহার করা উচিত? কীভাবে একটি class optimize করা যায়?*

class Animal {
	name: string;
	species: string;
	sound: string;

	constructor(name: string, species: string, sound: string) {
		this.name = name;
		this.species = species;
		this.sound = sound;
	}

	makeSound() {
		return `${this.name} is making ${this.sound}`;
	}
}

const kutta = new Animal("German Sphered", "Dog", "ghew ghew");

console.log(kutta.makeSound());
