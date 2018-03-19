export default function takeNumberFromInjectStr(str) {
	let strNumber = '';
	try {
		str.split('').forEach(item => {
			if (+item) {
				strNumber = strNumber + item.toString();
			}
		});
	} catch (error) {
		return error.name;
	}
	return +strNumber;
}