function cleanData(data) {

    const irony = document.getElementById('irony');
    const confidence = document.getElementById('confidence'); 
    const agreement = document.getElementById('agreement'); 
    const subjectivity = document.getElementById('subjectivity');

    irony.textContent = `${data.irony}`;
    confidence.textContent = `${data.confidence}`;
    agreement.textContent = `${data.agreement}`;
    subjectivity.textContent = `${data.subjectivity}`;
    console.log()

}


export {cleanData}