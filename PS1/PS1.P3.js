const fun3 = (s, cb) => cb(s);
console.log(fun3('supercalifragilisticexpialidocious', str => str.split(/(?=c)/g)));
console.log(fun3('supercalifragilisticexpialidocious', str => {
	let orig = str;
	str = str.replace(/a/g, 'A');
	
	return {
		originalString: orig,
		modifiedString: str,
		numberReplaced: str.match(/A/g).length,
		length: str.length
	};
}))