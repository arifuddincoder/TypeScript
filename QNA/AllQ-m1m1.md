# TypeScript Q&A Series

## 📚 1.4: Type Hints & Arrays

1. **What is the difference between Implicit and Explicit Type Hinting in TypeScript?**
2. **What is Optional Type Hinting in TypeScript? Describe with examples.**
3. **What are Literal Types in TypeScript? Explain with examples.**
4. **Why you should not use implicit data types / optional data hinting?**
5. **How to write array in TypeScript for strings array and for numbers?**
6. **Can you explain what a Tuple is in TypeScript, and how it differs from a regular array?**

---

## 📚 1.5: Object & Literal Types

1. **Write an object for a user who has `companyName`, `firstName`, `middleName`, `lastName`, and `isMarried`.  
   How to define it explicitly? Let's say someone doesn’t have `middleName` — how to make it optional?**
2. **What is literal types? How can you make `companyName` a literal type?**
3. **What is access modifier? How to make an object property unchangeable?**

---

## 📚 1.6: Functions & Methods

1. **How do you write a normal function and an arrow function in TypeScript?**  
   📘 _বাংলায়: TypeScript-এ সাধারণ ফাংশন এবং অ্যারো ফাংশন কীভাবে লেখা হয়?_

2. **How do you explicitly declare the return type of a function in TypeScript?**  
   📘 _বাংলায়: TypeScript-এ কোনো ফাংশনের রিটার্ন টাইপ কীভাবে স্পষ্টভাবে (explicitly) ঘোষণা করবেন?_

3. **What is the `this` keyword in functions, and in which situations does it not work as expected?**  
   📘 _বাংলায়: ফাংশনের মধ্যে `this` কী, এবং কখন এটি সঠিকভাবে কাজ করে না?_

4. **What is a method in TypeScript, and how do you define one to demonstrate your understanding?**  
   📘 _বাংলায়: TypeScript-এ মেথড কী, এবং শেখানোর জন্য একটি মেথড কীভাবে লিখবেন?_

5. **What is the `map()` function in TypeScript, how do you use it, and how can you add an explicit type to it?**  
   📘 _বাংলায়: TypeScript-এ `map()` ফাংশন কী, এটি কীভাবে ব্যবহার করবেন এবং এতে কীভাবে explicit টাইপ যুক্ত করবেন?_

---

## 📚 1.7: Spread, Rest & Scope

1. **What are the spread and rest operators in TypeScript, and how are they used?**  
   📘 _বাংলায়: TypeScript-এ spread এবং rest operators কী, এবং সেগুলো কীভাবে ব্যবহার করা হয়?_

2. **How can you prevent a variable from becoming global and restrict it to the local scope?**  
   📘 _বাংলায়: কোনো ভেরিয়েবলকে global scope-এ না গিয়ে local scope-এ সীমাবদ্ধ রাখতে কীভাবে কাজ করবেন?_

3. **How do you merge two name arrays into a single array using the spread operator?**  
   📘 _বাংলায়: দুটি নামের array কীভাবে একত্রে একটি array-তে রূপান্তর করবেন spread operator দিয়ে?_

4. **How do you merge two objects containing `stack` and `teacherName` properties into a single object?**  
   📘 _বাংলায়: দুটি object যেখানে `stack` ও `teacherName` প্রপার্টি আছে — সেগুলো কীভাবে একত্রে একটি object বানাবেন?_

5. **How do you use the rest operator in function parameters, and what is its purpose?**  
   📘 _বাংলায়: ফাংশনের প্যারামিটার হিসেবে rest operator কীভাবে ব্যবহার করবেন, এবং এটি কেন ব্যবহার করা হয়?_

---

## 📚 1.8: Destructuring

1. **How can you perform destructuring in TypeScript? What is the difference between object destructuring and array destructuring?**  
   📘 _বাংলায়: TypeScript-এ আপনি কীভাবে destructuring করবেন? এবং object destructuring আর array destructuring-এর মধ্যে পার্থক্য কী?_

2. **Can you explicitly declare types during destructuring? How does TypeScript detect the type of data in destructuring?**  
   📘 _বাংলায়: আপনি destructuring করার সময় টাইপ স্পষ্টভাবে (explicitly) ঘোষণা করতে পারেন কি? TypeScript কীভাবে টাইপ ধরতে পারে?_

3. **Suppose you have an array: `['Kamal', 'Jamal', 'Kashem', 'Hashem', 'Karim', 'Muza']`. You want to add a `bestFriend` property to 'Kashem' only. How can you do that? Also, what is the rest operator, and how can you use it in this context?**  
   📘 _বাংলায়: ধরুন আপনার কাছে একটি array আছে — আপনি শুধুমাত্র ‘Kashem’-এর জন্য একটি `bestFriend` প্রপার্টি যোগ করতে চান। কীভাবে করবেন? এবং `rest operator` কী এবং এই ক্ষেত্রে সেটা কীভাবে ব্যবহার করবেন?_

---

## 📚 1.9: Type Alias

1. **What is a Type Alias in TypeScript, and where can you use it?**  
   📘 _বাংলায়: TypeScript-এ Type Alias কী, এবং কোথায় কোথায় আপনি এটি ব্যবহার করতে পারেন?_

2. **How can you use a Type Alias with objects, variables, functions, and arrays? In which scenarios is it useful?**  
   📘 _বাংলায়: আপনি কীভাবে object, variable, function এবং array-এর সাথে Type Alias ব্যবহার করবেন? এবং কোন পরিস্থিতিতে এটি সবচেয়ে কার্যকর হয়?_

---

## 📚 1.10: Union & Intersection Types

1. **What are Union Types in TypeScript? How do you use them, and how are they different from JavaScript? Give an example.**  
   📘 _বাংলা: TypeScript-এ Union Types কী? কীভাবে ব্যবহার করা হয়, এবং এটি JavaScript থেকে কীভাবে আলাদা? একটি উদাহরণ দিন।_

2. **What is an Intersection Type in TypeScript? How does it work, and can you give an example?**  
   📘 _বাংলা: TypeScript-এ Intersection Type কী? এটি কীভাবে কাজ করে? একটি উদাহরণ দিন।_

---

## 📚 1.11: Operators

1. **What is the Ternary Operator in TypeScript, and how do you use it?**  
   📘 _বাংলায়: TypeScript-এ Ternary Operator কী এবং এটি কীভাবে ব্যবহার করা হয়? একটি উদাহরণ দিন।_

2. **What is Optional Chaining (`?.`) in TypeScript, and when should you use it?**  
   📘 _বাংলায়: Optional Chaining (`?.`) কী? কখন এটি ব্যবহার করা উচিত? উদাহরণসহ ব্যাখ্যা করুন।_

3. **What is the Nullish Coalescing Operator (`??`) in TypeScript, and how does it differ from the OR (`||`) operator?**  
   📘 _বাংলায়: Nullish Coalescing Operator (`??`) কী এবং এটি `||` থেকে কীভাবে আলাদা? একটি বাস্তব উদাহরণ দিন।_

---

## 📚 1.12: Special Types

1. **What are `never`, `unknown`, and `nullable` types in TypeScript? Explain each with an example.**  
   📘 _বাংলায়: TypeScript-এ `never`, `unknown`, এবং `nullable` টাইপ কী? প্রতিটির উদাহরণসহ ব্যাখ্যা করুন।_

2. **How do you use the `unknown` type in TypeScript, and how can you safely handle it using `if-else`?**  
   📘 _বাংলায়: `unknown` টাইপ TypeScript-এ কীভাবে ব্যবহার করা হয় এবং কীভাবে `if-else` দিয়ে নিরাপদভাবে হ্যান্ডল করা যায়?_

3. **Why is a function that throws an error considered to have the `never` type in TypeScript?**  
   📘 _বাংলায়: TypeScript-এ কোন ফাংশন `never` টাইপ হয় যখন তা `throw` করে? কেন? ব্যাখ্যা করুন।_
