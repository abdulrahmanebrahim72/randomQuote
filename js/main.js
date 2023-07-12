var quote = document.getElementById("quote");
var author = document.getElementById("author");

var allQuotes = [
  {
    quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
    author: " Andre Gide, Autumn Leaves",
  },
  {
    quote: `“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”`,
    author: " H. Jackson Brown Jr.",
  },
  {
    quote: `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
    author: "Ralph Waldo Emerson",
  },
  {
    quote: `“I am so clever that sometimes I don't understand a single word of what I am saying.”`,
    author: "Oscar Wilde",
  },
  {
    quote: `“Without music, life would be a mistake.”`,
    author: "Friedrich Nietzsche",
  },
  {
    quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    author: "Mahatma Gandhi",
  },
  {
    quote: `“A friend is someone who knows all about you and still loves you.”`,
    author: "Elbert Hubbard",
  },
  {
    quote: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
    author: "Maya Angelou",
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    author: "Mark Twain",
  },
  {
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    author: "Dr. Seuss",
  },
];

var fNumber = Math.floor(Math.random() * allQuotes.length);

function showQuote() {
  var randomNumber = fNumber;
  quote.innerHTML = allQuotes[randomNumber].quote;
  author.innerHTML = allQuotes[randomNumber].author;

  //update fNumber
  fNumber = Math.floor(Math.random() * allQuotes.length);

  //check fNumber if equal randomNumber then will update it agin
  while(fNumber == randomNumber){
    fNumber = Math.floor(Math.random() * allQuotes.length);
  }

  //if not equal randomNumber then will assign value of fNumber in randomNumber
  randomNumber = fNumber;
}