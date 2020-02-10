function *fib()
{
	let res = 0, next = 1;
	yield res;
	while(true)
	{
		let prev = res;
		res += next;
		next = prev;
		
		yield res;
	}
}

function *fibEven()
{
	let fibGen = fib();
	while(true)
	{
		let res = fibGen.next().value;
		while(res % 2)
		{
			res = fibGen.next().value;
		}
		
		yield res;
	}
}

let fibEvenGen = fibEven();
for(let i = 0; i < 6; i++)
{
	console.log(fibEvenGen.next().value)
}