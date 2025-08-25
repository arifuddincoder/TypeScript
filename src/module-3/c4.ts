{
	// Explain the instanceof guard with an example (e.g., Animal class). How can you handle it smartly? what is type narrowing?

	class Animal {
		constructor(public name: string, public species: string) {
			this.name = name;
			this.species = species;
		}

		makeSound() {
			return `${this.name} of ${this.species} making sound`;
		}
	}

	class Dog extends Animal {
		constructor(public name: string, public species: string) {
			super(name, species);
		}

		bark() {
			return `${this.name} is barking`;
		}
	}

	class Cat extends Animal {
		constructor(public name: string, public species: string) {
			super(name, species);
		}

		meow() {
			return `${this.name} is meowing`;
		}
	}

	const isDog = (animal: Animal): animal is Dog => {
		return animal instanceof Dog;
	};

	const dog1 = (animal: Animal) => {
		if (isDog(animal)) {
			return animal.bark();
		}
	};

	const isCat = (animal: Animal): animal is Cat => {
		return animal instanceof Cat;
	};

	const cat1 = (animal: Animal) => {
		if (isCat(animal)) {
			return animal.meow();
		}
	};

	const dogIns = new Dog("German Shepherd", "Dog");
	const catIns = new Cat("Persian Cat", "Cat");

	console.log(dog1(dogIns));
	console.log(cat1(catIns));
}

{
	// smart way

	class Animal {
		constructor(public name: string, public species: string) {
			this.name = name;
			this.species = species;
		}

		makeSound() {
			return `${this.name} of ${this.species} making sound`;
		}
	}

	class Dog extends Animal {
		constructor(public name: string, public species: string) {
			super(name, species);
		}

		bark() {
			return `${this.name} is barking`;
		}
	}

	class Cat extends Animal {
		constructor(public name: string, public species: string) {
			super(name, species);
		}

		meow() {
			return `${this.name} is meowing`;
		}
	}

	// ✅ Custom type guards
	const isDog = (animal: Animal): animal is Dog => animal instanceof Dog;
	const isCat = (animal: Animal): animal is Cat => animal instanceof Cat;

	// ✅ Smart handling with narrowing using instanceof
	function handleAnimal(animal: Animal) {
		if (animal instanceof Dog) {
			// এখানে TypeScript বুঝে ফেলে animal হলো Dog → bark() safe
			return animal.bark();
		}
		if (animal instanceof Cat) {
			// এখানে animal হলো Cat → meow() safe
			return animal.meow();
		}
		// fallback: generic animal
		return animal.makeSound();
	}

	const dogIns = new Dog("German Shepherd", "Dog");
	const catIns = new Cat("Persian Cat", "Cat");

	console.log(handleAnimal(dogIns));
	console.log(handleAnimal(catIns));
}
