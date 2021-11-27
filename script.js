let apiQuotes=[];
const quote=document.querySelector("#quote")
const author=document.querySelector("#author")
const newQuoteBtn=document.querySelector("#new-quote")
const twitterBtn=document.querySelector("#twitter");
const copyBtn=document.querySelector("#copy-quote");
// Get quotes


function newQuote(){
    let quoteNumber= Math.floor(Math.random()*apiQuotes.length)
    quote.textContent=apiQuotes[quoteNumber]['text'];
  
    
    if(apiQuotes[quoteNumber]['author']==null){
       
        author.textContent="Unknown";
    }
    else{
    author.textContent=apiQuotes[quoteNumber]['author'];  
    }
    
    

}

function copyQuote(){
    navigator.clipboard.writeText(`${quote.textContent}  -${author.textContent}`);
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

copyBtn.addEventListener("click",copyQuote);
newQuoteBtn.addEventListener("click",newQuote);