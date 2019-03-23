var quotes=[
		
			 "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. Said by:Francis of Assisi",
	   
	    	"Believe you can and you're halfway there. Said by:Theodore Roosevelt",
	    
	    	"It does not matter how slowly you go as long as you do not stop. Said by:Confucius",
	    
	    	"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. Said by:Thomas A. Edison",
	    
	    	"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence. Said by:Confucius",
	    
	    	"Don't watch the clock; do what it does. Keep going. Said by:Sam Levenson",
	    
	    	"A creative man is motivated by the desire to achieve, not by the desire to beat others. Said by:Ayn Rand",
	    
	    	"A creative man is motivated by the desire to achieve, not by the desire to beat others. Said by:Ayn Rand",
	    
	    	"Expect problems and eat them for breakfast. Said by:Alfred A. Montapert",
	    
	    	"Start where you are. Use what you have. Do what you can. Said by:Arthur Ashe",
	    
	    	"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. Said by:Samuel Beckett",	    
	    	"Be yourself; everyone else is already taken. Said by:Oscar Wilde",
	    
	    	"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Said by:Albert Einstein",
	    
	    	"Always remember that you are absolutely unique. Just like everyone else. Said by:Margaret Mead",
	    
	    	"Do not take life too seriously. You will never get out of it alive. Said by:Elbert Hubbard",
	    
	    	"People who think they know everything are a great annoyance to those of us who do. Said by:Isaac Asimov",
	    
	    	"Procrastination is the art of keeping up with yesterday. Said by:Don Marquis",
	    
	    	"Get your facts first, then you can distort them as you please. Said by:Mark Twain",
	    
	    	"A day without sunshine is like, you know, night. Said by:Steve Martin",
	    
	    	"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is. Said by:Ellen DeGeneres",
	    
	    	"Don't sweat the petty things and don't pet the sweaty things. Said by:George Carlin",
	    
	    	"Always do whatever's next. Said by:George Carlin",
	    
	    	"Atheism is a non-prophet organization. Said by:George Carlin"];

    	function randomCode(){
    	var answer = "";
    	answer += (Math.floor(Math.random() * quotes.length));
    	document.getElementById("quoteDisplay").innerHTML = quotes[answer];
    	return(quotes[answer]);
    	}
    	randomCode(quotes);