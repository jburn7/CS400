let str1 = '4+2', str2 = '5*7', str3 = '6-1', str4 = '9/2';
const fun2 = s => {
	let terms = s.split('');
	switch(terms[1]){
		case '+':
			return parseInt(terms[0]) + parseInt(terms[2]);
			break;
		case '-':
			return terms[0] - terms[2];
			break;
		case '*':
			return terms[0] * terms[2];
			break;
		case '/':
			return terms[0] / terms[2];
			break;
		default:
			break;
	}
};
console.log(`${fun2(str1)}\n${fun2(str2)}\n${fun2(str3)}\n${fun2(str4)}`);