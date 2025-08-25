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
