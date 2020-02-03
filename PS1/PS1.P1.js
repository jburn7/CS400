let str = 'supercalifragilisticexpialidocious';
const fun1 = s => s.replace(/\W/ig, '').toLowerCase().split('').sort().join('');
console.log(fun1(str));