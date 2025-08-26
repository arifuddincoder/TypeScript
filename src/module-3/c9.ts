{
	// 1. **What is Abstraction? Explain it with an example (e.g., Vehicle).**
	//    🔹 **Abstraction কী? একটি উদাহরণসহ ব্যাখ্যা করো (যেমন: Vehicle)।**
	// 2. **What is an Abstract Class? Explain it with an example (e.g., Vehicle).**
	//    🔹 **Abstract Class কী? একটি উদাহরণসহ ব্যাখ্যা করো (যেমন: Vehicle)।**

	// 1) Abstraction with an Interface
	interface Vehicle {
		startEngine(): string;
		stopEngine(): string;
		move(): string;
	}

	class Car1 implements Vehicle {
		startEngine(): string {
			return "I am starting car engine 1";
		}
		stopEngine(): string {
			return "I am stopping car engine 1";
		}
		move(): string {
			return "I am moving Car 1";
		}
	}

	const car1 = new Car1();
	console.log(car1.startEngine()); // I am starting car engine 1

	// 2) Abstraction with an Abstract Class
	abstract class AbstractVehicle {
		abstract startEngine(): string;
		abstract stopEngine(): string;
		abstract move(): string; // <-- keep name consistent with the interface

		// concrete (non-abstract) method
		test(): string {
			return "I am testing the vehicle";
		}
	}

	class Car2 extends AbstractVehicle {
		startEngine(): string {
			return "I am starting car engine 2";
		}
		stopEngine(): string {
			return "I am stopping car engine 2";
		}
		move(): string {
			return "I am moving Car 2";
		}
	}

	const car2 = new Car2();
	console.log(car2.move()); // I am moving Car 2
	console.log(car2.test()); // I am testing the vehicle
}
