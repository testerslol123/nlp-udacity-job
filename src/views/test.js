function testSubmit(event) {
    res.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
    console.log('Holla');
  }
  
const form = document.getElementById('main-form');
const res = document.getElementById('res');
console.log(res)  
console.log(form)  
form.addEventListener('submit', testSubmit);