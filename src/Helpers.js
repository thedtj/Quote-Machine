export function randNumGen(arr) {
	const randNum = Math.ceil(Math.random() * (arr.length - 1));
	return randNum;
}
