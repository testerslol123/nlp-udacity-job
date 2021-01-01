const btn = document.getElementById('btn');
const url = document.getElementById('url');


btn.addEventListener("click", function() {
    console.log('button clicked');
    callAPI(url.value);
});



async function callAPI(url){

    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            fullurl: url
        })

    }).then(res => res.json()).then(data => {
        console.log(data);
    
    });

}


