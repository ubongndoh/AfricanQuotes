$(document).ready(function () {
	//Array of objects
	quoteArray = [{
			quote: "To be without a friend is to be poor indeed.",
			author: "Tanzanian proverb"
		},
		{
			quote: "Unity is strength, division is weakness.",
			author: "Swahili proverb"
		},
		{
			quote: "Sticks in a bundle are unbreakable.",
			author: "Bondei proverb"
		},
		{
			quote: "A single bracelet does not jingle.",
			author: "Congolese proverb"
		},
		{
			quote: "A single stick may smoke, but it will not burn.",
			author: "African proverb"
		},

		{
			quote: "A family is like a forest, when you are outside it is dense, when you are inside you see that each tree has its place.", 
			author: "African Proverb"
		},
		{
			quote: "A united family eats from the same plate.",
			author: "Baganda proverb"
		},
		{
			quote:"He who earns calamity, eats it with his family.",
			author:"~ African proverb"
		},
		{
			quote:"If relatives help each other, what evil can hurt them?", 
			author:"~ African proverb"
		},
		{
			quote:"Home affairs are not talked about on the public square.",
			author:"~ African proverb"
		},
		{
			quote:"There is no fool who is disowned by his family.", 
			author:"~ African proverb"
		},
		{
			quote:"Dine with a stranger but save your love for your family.", 
			author:"~ Ethiopian proverb"
		},
		{
			quote:"Brothers love each other when they are equally rich.",
			author:"~ African proverb"
		},
		{
			quote:"If I am in harmony with my family, that’s success." ,
			author:"~ Ute proverb"
		},
		{
			quote:"A family tie is like a tree, it can bend but it cannot break.",
			author: "~ African proverb"
		},
		{
			quote:"Dine with a stranger but save your love for your family.", 
			author:"~ Ethiopian proverb"
		},
		{
			quote:"The old woman looks after the child to grow its teeth and the young one in turn looks after the old woman when she loses her teeth. ",
			author:"~ Akan (Ghana, Ivory Coast) proverb"
		},
		{
			quote:"When brothers fight to the death, a stranger inherits their father’s estate.",
			author: "~ Ibo proverb"
		},
		{
			quote:"Children are the reward of life. ",
			author:"~ African proverb"
		},
	];


	$("#button").on("click", function () {
		let randomNumber = Math.floor(Math.random() * quoteArray.length);
			//console.log(randomNumber);

		//	$("#quote").text(quoteArray[randomNumber]["quote"]);
		//	$("#author").text(quoteArray[randomNumber]["author"]);

		document.querySelector("#quote").innerHTML = quoteArray[randomNumber]["quote"];
		document.querySelector("#author").innerHTML = quoteArray[randomNumber]["author"];
	}); //ends button on click

}); //ends document.ready