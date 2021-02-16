function cleanData(data) {

    const irony = document.getElementById('irony');
    const confidence = document.getElementById('confidence'); 
    const agreement = document.getElementById('agreement'); 
    const subjectivity = document.getElementById('subjectivity');

    irony.textContent = `IRONY: ${data.irony}`;
    confidence.textContent = `CONFIDENCE: ${data.confidence}`;
    agreement.textContent = `AGREEMENT: ${data.agreement}`;
    subjectivity.textContent = `SUBJECTIVITY: ${data.subjectivity}`;
    console.log()

}


export {cleanData}