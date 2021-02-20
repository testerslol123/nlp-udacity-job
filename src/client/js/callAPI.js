// import {checkURL} from checkURL
import {cleanData} from "/src/client/js/cleanData.js"


async function callAPI(url){

    fetch('http://localhost:5000/api', {
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
        cleanData(data);
    });

}




export { callAPI }
