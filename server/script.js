let form = document.querySelector('form');
let searchResults = [];

//API key: AIzaSyDxdV2IRz8P1kr0vm1EV9QWahAfQxUEN-c


// ----- Start of functions -----
function handleRequest(res){
    try{
        for(let i = 0;i < 10;i++){
            document.getElementById('searchContent').innerHTML += `<br> <a href=${res.items[i].link}`
        }
    }catch(error){
        console.log(error);
    }
}

document.getElementById('textBox').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        form.submit()
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // let sQuery = new FormData(form);
    // console.log(sQuery)
    let q = document.getElementById('textBox').value;
    console.log(q);
    let newElement = document.createElement('script');
    // let url = `https://www.google.com/search?q=${q}`;
    let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDxdV2IRz8P1kr0vm1EV9QWahAfQxUEN-c&cx=a7b574e9955255ea2&q=${q}`
    console.log(url)
    newElement.src = url;
    newElement.id = "mainscript"
    document.body.appendChild(newElement);
    fetch(url, {
        //mode: 'no-cors',
        method: "GET", 
        headers: {
            "Content-type": "application/json",
            "Access-Control-Request-Method": "GET",
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then(response => {
        searchResults = response.items 
        console.log(response)
    })
})

async function getRandomSearchQuery () {
    let formSend = await submitForm()
    // let rs = searchResults[Math.floor(Math.random() * searchResults.length]
    let randomNumber = Math.floor(Math.random() * (searchResults.length - 1))
    let urlToGo = searchResults[randomNumber]?.link
    if (urlToGo) {
        window.location.href = urlToGo
    }
}

function submitForm() {
    return Promise.resolve(() => form.submit())
  }

// ----- End of functions -----
