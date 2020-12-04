var  btn = document.querySelector('#btn-click');
var output = document.querySelector('#output');
// var serverUrl = "https://api.adviceslip.com/advice";
var serverUrl = "https://quote-garden.herokuapp.com/api/v2/quotes/random";


function isOnline() { 
  
                            if (!navigator.onLine) { 
                                document.getElementById("#output").innerText = "Online"; 
                            } else { 
                                document.getElementById("#output").innerText = "Offline"; 
                            } 
                     }

function errorHandler(error){
                                return( "server Error" + error);
                            } 




function process(){
   
    if(navigator.onLine){   
                            // var textInput = txt.value 
                            console.log("clicked")
  fetch(serverUrl).then(respone => respone.json()).then( json => {
                                    // var outputText =  json.slip.advice; 
                                    var quoteText =  json.quote.quoteText; 
                                    var quoteAuthor = json.quote.quoteAuthor;
                                    outputText = quoteText + "<br>"+ "---" + quoteAuthor;
                                    output.innerHTML = outputText
                                    console.log(outputText);
                                    console.log(quoteAuthor)
                                }
                                ).catch(errorHandler)  

                        }
    else{
        var  outputText = "Please!! Connect To Internet.. ,You are offline......";
            output.innerText = outputText
            output.style.color = 'green';
        }
    }
btn.addEventListener('click',process);
    




 

