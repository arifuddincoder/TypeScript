## Questions from Programming Hero: 
[https://github.com/Apollo-Level2-Web-Dev/batch-4-be-a-typescript-technocrat/blob/main/practice_probelms.md](https://github.com/Apollo-Level2-Web-Dev/batch-4-be-a-typescript-technocrat/blob/main/practice_probelms.md)

---

## 📚 2.1: Type Assertion & Type Narrowing

1. **What is Type Assertion in TypeScript? Give an example using the `as` keyword.**  
   🔹 *Type Assertion বলতে কী বোঝায়? `as` কিওয়ার্ড ব্যবহার করে একটি উদাহরণ দাও।*

2. **What is Type Narrowing in TypeScript? How can you use `typeof` to narrow a type?**  
   🔹 *Type Narrowing কী? কিভাবে `typeof` ব্যবহার করে টাইপ নির্ধারণ (narrow) করা যায়?*

3. **Write a function that accepts `string | number` and performs different logic based on the type.**  
   🔹 *একটি ফাংশন লিখো যা `string | number` ইনপুট নেয় এবং টাইপ অনুযায়ী আলাদা আলাদা লজিক চালায়।*

4. **What is the difference between type assertion and type narrowing? When should you use each?**  
   🔹 *Type Assertion এবং Type Narrowing-এর মধ্যে পার্থক্য কী? কখন কোনটি ব্যবহার করা উচিত?*

---

## 📚 2.2: Interface vs Type Alias

1. **What is an interface in TypeScript? How is it different from a type alias?**  
   🔹 *TypeScript-এ interface কী? এটি type alias থেকে কীভাবে আলাদা?*

2. **In which cases can we use `type` but not `interface` in TypeScript?**  
   🔹 *TypeScript-এ কোন কোন ক্ষেত্রে `type` ব্যবহার করা যায় কিন্তু `interface` ব্যবহার করা যায় না?*

3. **How can you create an intersection using `interface` in TypeScript?**  
   🔹 *TypeScript-এ `interface` ব্যবহার করে কীভাবে intersection তৈরি করা যায়?*

4. **How can we extend both `type` and `interface` in TypeScript?**  
   🔹 *TypeScript-এ `type` এবং `interface` — উভয়কেই কীভাবে extend করা যায়?*

5. **How can we use an interface with arrays in TypeScript? Also, is an array an object or a function?**  
   🔹 *TypeScript-এ array-এর সঙ্গে `interface` কীভাবে ব্যবহার করা যায়? এবং array কি object না function?*

6. **How can we use `type` and `interface` with functions? When should we use one over the other?**  
   🔹 *Function-এর সঙ্গে `type` এবং `interface` কীভাবে ব্যবহার করা যায়? কখন কোনটি ব্যবহার করা উচিত?*

7. **In the case of arrays, which one should you prefer between `type` and `interface`? What about for functions and objects?**  
   🔹 *Array-এর ক্ষেত্রে `type` নাকি `interface` ব্যবহার করা উচিত? Function এবং object-এর ক্ষেত্রেও কোনটি ব্যবহার করা ভালো?*

---

## 📚 2.3: Generics in TypeScript

1. **What are generics in TypeScript? Explain with examples.**  
   🔹 *TypeScript-এ Generics কী? উদাহরণসহ ব্যাখ্যা করো।*

2. **How can you make a generic type reusable in TypeScript?**  
   🔹 *TypeScript-এ কীভাবে একটি generic টাইপ পুনর্ব্যবহারযোগ্য (reusable) করা যায়?*

3. **How can you use generics with array types? Explain with examples.**  
   🔹 *Array টাইপের সঙ্গে generics কীভাবে ব্যবহার করা যায়? উদাহরণসহ ব্যাখ্যা করো।*

4. **How can you use generics with objects? Also, what is a use case for an array of generic objects?**  
   🔹 *Generic কীভাবে object-এর সঙ্গে ব্যবহার করা যায়? এবং generic object array-এর ব্যবহার কোথায় হয়?*

5. **How can you create a generic tuple in TypeScript?**  
   🔹 *TypeScript-এ কীভাবে একটি generic tuple তৈরি করা যায়?*

---

## 📚 2.4: Generic Interface & Nullable Generics

1. **How can you use generics with interfaces in TypeScript? Explain with an example.**  
   🔹 *TypeScript-এ interface-এর সঙ্গে generics কীভাবে ব্যবহার করা যায়? একটি উদাহরণসহ ব্যাখ্যা করো।*

2. **How can you pass `null` as a generic parameter when there is no value?**  
   🔹 *যখন কোনো মান নেই, তখন কীভাবে generic parameter হিসেবে `null` পাঠানো যায়?*

---

## 📚 2.5: Advanced Generics Use Cases

1. **How can you use generics in functions in TypeScript?**  
   🔹 *TypeScript-এ ফাংশনে কীভাবে generics ব্যবহার করা যায়?*

2. **My teacher once said we should not add object types directly. Why is that? Give an example.**  
   🔹 *আমার শিক্ষক একবার বলেছিলেন সরাসরি object টাইপ না দেওয়াই ভালো — কেন? একটি উদাহরণ দাও।*

3. **How can you create an array of tuples using a function?**  
   🔹 *ফাংশন ব্যবহার করে কীভাবে tuple-এর array তৈরি করা যায়?*

4. **Suppose we have a course called 'Next Level Web Dev', and we want to add students to an object where the course name remains constant, but the student information changes. How can we structure such an object?**  
   🔹 *ধরা যাক আমাদের একটি কোর্স আছে যার নাম 'Next Level Web Dev', এবং আমরা এমন একটি অবজেক্ট তৈরি করতে চাই যেখানে কোর্সের নাম অপরিবর্তিত থাকবে কিন্তু প্রতিবার আলাদা আলাদা ছাত্র যুক্ত হবে। কীভাবে এমন অবজেক্ট স্ট্রাকচার করা যায়?*

---


## 📚 2.6: Generic Constraints & keyof Operator

1. **Based on the previous question, how can you enforce that each student must have three properties: `id`, `name`, and `email`?**  
   🔹 *আগের প্রশ্নের ভিত্তিতে, কীভাবে নিশ্চিত করা যায় যে প্রতিটি student-এর মধ্যে `id`, `name`, এবং `email` এই তিনটি প্রপার্টি অবশ্যই থাকবে?*


---


## 📚 2.7: Generic Constraints & keyof Operator

1. **What are constraints in TypeScript generics? Explain generic constraints using the `keyof` operator with examples.**  
   🔹 *TypeScript-এর generics-এ constraint কী? `keyof` অপারেটর ব্যবহার করে generic constraint-এর ব্যাখ্যা দাও উদাহরণসহ।*

2. **How can you create a reusable generic function in TypeScript that takes an object and a key, and returns the value of that key with full type safety using `keyof`?**  
   🔹 *TypeScript-এ কীভাবে একটি পুনর্ব্যবহারযোগ্য (reusable) generic ফাংশন তৈরি করা যায় যা একটি অবজেক্ট এবং একটি key ইনপুট হিসেবে নেয় এবং `keyof` ব্যবহার করে সম্পূর্ণ টাইপ সেফটি বজায় রেখে ঐ key-এর value রিটার্ন করে?*


---

## 📚 2.8: Asynchronous TypeScript & API Typing

1. **Explain asynchronous programming in TypeScript with an example as shown in the tutorial.**  
   🔹 *টিউটোরিয়াল অনুযায়ী একটি উদাহরণসহ TypeScript-এ asynchronous প্রোগ্রামিং ব্যাখ্যা করো।*

2. **Why is the ES6 version required to compile promises in TypeScript?**  
   🔹 *TypeScript-এ promise কম্পাইল করার জন্য কেন ES6 ভার্সন প্রয়োজন হয়?*

3. **How can you fetch data from JSONPlaceholder using asynchronous TypeScript? How can you define types or aliases for the API response?**  
   🔹 *Asynchronous TypeScript ব্যবহার করে কীভাবে JSONPlaceholder থেকে ডেটা ফেচ করা যায়? এবং কীভাবে API response-এর জন্য type বা alias সংজ্ঞায়িত করা যায়?*


---




## 📚 2.9: Conditional Types in TypeScript

1. **What is a conditional type in TypeScript? Explain with examples.**  
   🔹 *TypeScript-এ conditional type কী? উদাহরণসহ ব্যাখ্যা করো।*

2. **What is a nested conditional type in TypeScript? Explain with examples.**  
   🔹 *TypeScript-এ nested conditional type কী? উদাহরণসহ ব্যাখ্যা করো।*

3. **Explain conditional types using a real-life example: Suppose a Dubai Sheikh owns many things like motorcycles, cars, etc. Write a conditional type to check if a given item is a car, bike, sheep, or tractor.**  
   🔹 *ধরা যাক, একজন দুবাইয়ের শেখের অনেক কিছু আছে যেমন মোটরসাইকেল, গাড়ি ইত্যাদি। এখন conditional type ব্যবহার করে নির্ধারণ করো কোনটি car, bike, sheep বা tractor।*



---



 ## 📚 2.10: Mapped Types & Lookup Types

1. **What does the `map()` method return in JavaScript?**  
   🔹 *JavaScript-এ `map()` মেথড কী রিটার্ন করে?*

2. **What are mapped types in TypeScript? Explain with examples.**  
   🔹 *TypeScript-এ mapped types কী? উদাহরণসহ ব্যাখ্যা করো।*

3. **What is a lookup type in TypeScript?**  
   🔹 *TypeScript-এ lookup type কী?*

4. **How can you use mapped types with generics to make them more flexible? Why is this needed? Provide an example to illustrate.**  
   🔹 *Mapped types-কে generic-এর সঙ্গে কীভাবে আরও flexible করা যায়? এটি কেন প্রয়োজন? একটি উদাহরণ দিয়ে ব্যাখ্যা করো।*

5. **Convert the numeric keys of the \AreaNum` type to strings**`

---



## 📚 2.11: Utility Types in TypeScript

1. **What are utility types in TypeScript? Which utility types are most commonly used in real-life projects? Give some examples.**  
   🔹 *TypeScript-এ utility types কী? কোন কোন utility type বাস্তব প্রজেক্টে সবচেয়ে বেশি ব্যবহৃত হয়? কিছু উদাহরণ দাও।*

2. **What is the `Pick` utility type in TypeScript? Explain with examples.**  
   🔹 *TypeScript-এ `Pick` utility type কী? উদাহরণসহ ব্যাখ্যা করো।*

3. **What is the `Omit` utility type in TypeScript? Explain with examples.**  
   🔹 *TypeScript-এ `Omit` utility type কী? উদাহরণসহ ব্যাখ্যা করো।*

4. **What is the `Required` utility type in TypeScript? In what situations should you use it? Explain with examples.**  
   🔹 *TypeScript-এ `Required` utility type কী? কখন এটি ব্যবহার করা উচিত? উদাহরণসহ ব্যাখ্যা করো।*

5. **What is the `Partial` utility type in TypeScript? Explain with examples.**  
   🔹 *TypeScript-এ `Partial` utility type কী? উদাহরণসহ ব্যাখ্যা করো।*

6. **What is the `Readonly` utility type in TypeScript? Explain with examples.**  
   🔹 *TypeScript-এ `Readonly` utility type কী? উদাহরণসহ ব্যাখ্যা করো।*

7. **What is the `Record` utility type in TypeScript? Explain with examples.**  
   🔹 *TypeScript-এ `Record` utility type কী? উদাহরণসহ ব্যাখ্যা করো।*



---