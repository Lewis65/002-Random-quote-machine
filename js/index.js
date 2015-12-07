var quotes = [
[0, "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.", "Marcus Aurelius, Meditations"],
[1, "Dwell on the beauty of life. Watch the stars, and see yourself running with them.", "Marcus Aurelius, Meditations"],
[2, "You have power over your mind - not outside events. Realize this, and you will find strength.", "Marcus Aurelius, Meditations"],
[3, "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.", "Marcus Aurelius, Meditations"],
[4, "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.", "Marcus Aurelius, Meditations"]
];
var quotesUsed = [];
var newQuote = Math.floor(Math.random() * quotes.length);
var quoteBody = "";
var quoteAuthor = "";

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};

function generateQuote(){
	newQuote = Math.floor(Math.random() * quotes.length);
}

function nextQuote(){
	var oldQuote = newQuote;
	//Check if all quotes have been used
	if (quotesUsed.length === quotes.length) {
		//If so, empty used quotes
		quotesUsed = [];
		generateQuote();
	}
	//Call quote generation function until an unused quote arrives; don't use current quote on a new loop through
	while (quotesUsed.contains(newQuote) || oldQuote === newQuote){
		generateQuote();
	}
	quoteAuthor = quotes[newQuote][2];
	quoteBody = quotes[newQuote][1];
	//Push ID of new quote to used quotes list
	quotesUsed.push(newQuote);
	$(".quote-body").text(quoteBody);
	$(".quote-author").text(quoteAuthor);
	$(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURI('"' + quoteBody + '" - ' + quoteAuthor))
}

$(document).ready(function(){
	nextQuote()
});
$("#icon-next").click(function(){
	nextQuote()
});