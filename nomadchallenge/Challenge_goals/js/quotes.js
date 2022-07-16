const quotes = [
    {
        quote : "Time is gold!",
        author : " — Benjamin Franklin" ,       
    },
    {
        quote : "When you go through hardships and decide not to surrender, that is strength.",
        author : " — Arnold Schwarzenegger",
    },
    {
        quote : "It is kind of fun to do the impossible.",
        author : "— Walt Disney",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toQuote.quote;
author.innerText = toQuote.author;