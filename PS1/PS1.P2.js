let str1 = '4+2', str2 = '5*7', str3 = '6-1', str4 = '9/2';
const fun2 = s => {
	switch(s.charAt(1)){
		case '+':
			return (expr) => parseInt(expr.substr(0, 1) + expr.substr(2, 1));
			break;
		case '-':
			return (expr) => {
				return parseInt(expr.substr(0, 1)) - parseInt(expr.substr(2, 1));
			}
			break;
		case '*':
			return (expr) => parseInt(expr.substr(0, 1) * expr.substr(2, 1));
			break;
		case '/':
			return (expr) => parseFloat(expr.substr(0, 1) / expr.substr(2, 1));
			break;
		default:
			break;
	}
};
console.log(`${fun2(str1)(str1)}\n${fun2(str2)(str2)}\n${fun2(str3)(str3)}\n${fun2(str4)(str4)}`);