function *sentToWords(sentence)
{
	let words = sentence.split(' ');
	const wordsIter = words[Symbol.iterator]();
	let done = false;
	while(!done)
	{
		let word = wordsIter.next();
		if(!word.done)
		{
			yield word.value;
		}
		done = word.done;
	}
}

let sent = 'All I know is something like a bird within her sang';
let sentToWordsGen = sentToWords(sent);
for(let i = sent.split(' ').length; i > 0; i--)
{
	console.log(sentToWordsGen.next().value);
}