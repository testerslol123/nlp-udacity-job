import {checkURL} from checkURL


async function callAPI(){

    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            url: url.value
        })

    }).then(res => res.json()).then(data => {
        console.log(data);
        cleanData(data);
    });

}

export { callAPI }
