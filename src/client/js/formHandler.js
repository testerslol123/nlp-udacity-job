function handleSubmit(event) {
    event.preventDefault();
    
    let formText = document.getElementById("name").value;
    Client.checkForName(formText);
    console.log("::: Form Submitted :::")
}

export {handleSubmit}