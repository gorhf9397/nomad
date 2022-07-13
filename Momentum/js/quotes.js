
const quotes = [
    {
        quote: "윤서는 키가 작다.",
        author: "김석근",
    },
    {
        quote: "윤서는 바보다.",
        author: "김석근",
    },
    {
        quote: "윤서는 콩이다.",
        author: "김석근",
    },
    {
        quote: "윤서는 유연성이 0이다.",
        author: "김석근",
    },
    {
        quote: "윤서는 귀엽다.",
        author: "김석근",
    },
    {
        quote: "윤서는 물을 안마신다.",
        author: "김석근",
    },
    {
        quote: "윤서는 중국음식을 좋아한다.",
        author: "김석근",
    },
    {
        quote: "윤서는 한입충이다.",
        author: "김석근",
    },
    {
        quote: "윤서는 욕쟁이다.",
        author: "김석근",
    },
    {
        quote: "윤서는 운전도 할수있다.",
        author: "김석근",
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;