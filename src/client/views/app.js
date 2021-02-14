import {callAPI} from "../js/callAPI";

const btn = document.getElementById('btn');
const url = document.getElementById('url');

const irony = document.getElementById('irony');
const confidence = document.getElementById('confidence'); 
const agreement = document.getElementById('agreement'); 
const subjectivity = document.getElementById('subjectivity'); 



btn.addEventListener("click", function() {
    console.log(url.value);
    callAPI();
});


// async function callAPI(){

//     fetch('/api', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//             url: url.value
//         })

//     }).then(res => res.json()).then(data => {
//         console.log(data);
//         cleanData(data);
//     });

// }



function cleanData(data) {

    irony.textContent = `IRONY: ${data.irony}`;
    confidence.textContent = `CONFIDENCE: ${data.confidence}`;
    agreement.textContent = `AGREEMENT: ${data.agreement}`;
    subjectivity.textContent = `SUBJECTIVITY: ${data.subjectivity}`;
    console.log()

}
