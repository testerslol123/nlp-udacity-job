function cleanData(data) {

    irony.textContent = `IRONY: ${data.irony}`;
    confidence.textContent = `CONFIDENCE: ${data.confidence}`;
    agreement.textContent = `AGREEMENT: ${data.agreement}`;
    subjectivity.textContent = `SUBJECTIVITY: ${data.subjectivity}`;
    console.log()

}


export {cleanData}