let apiQuotes=[];
let quote=document.querySelector("#quote")
let author=document.querySelector("#author")
let newQuoteBtn=document.querySelector("#new-quote")
// Get quotes


function newQuote(){
    let quoteNumber= Math.floor(Math.random()*apiQuotes.length)
    quote.textContent=apiQuotes[quoteNumber]['text'];
    author.textContent=apiQuotes[quoteNumber]['author'];  
}

async function getQuotes(){
    const apiUrl="https://type.fit/api/quotes"
    try{
 const reponse = await fetch(apiUrl);
 apiQuotes= await reponse.json();
 newQuote();
 
}
    catch(error){
        //catch here
        alert("something went wrong");
    }

}



getQuotes();


newQuoteBtn.addEventListener("click",newQuote);