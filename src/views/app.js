const btn = document.getElementById('api-call');
const txtBox = document.getElementById('url');


btn.addEventListener("click", function () {
    handleSubmission(txtBox.value);
});



async function handleSubmission(url){

    console.log('this is it')
    console.log("hello")
    console.log(`The URL is ${url}`);


    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            url: url
        })

    }).then(res => res.json()).then(data => {
        console.log(data);
        
    });

}