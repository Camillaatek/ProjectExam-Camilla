const form = document.querySelector ("form#signup");
form.addEventListener("submit", validateForm);

const name = document.querySelector ("input#name");
const subject = document.querySelector ("input#subject");
const email = document.querySelector ("input#email");
const message = document.querySelector ("input#message");

// const message = document.querySelector ("p#message");
const nameMsg = document.querySelector ("span#nameMsg");
const subjectMsg = document.querySelector ("span#subjectMsg");
const emailMsg = document.querySelector ("span#emailMsg");
const messageMsg = document.querySelector ("span#messageMsg");

function validateForm(e) {
  // Prevent the form from submitting when clicking the "Submit" button
  e.preventDefault();

  // Validate Name, minimum 2 characters long, no digits
  let submittedName = name.value.trim(); 
  console.log("Name: " + submittedName); 
  nameMsg.innerHTML = "";
  if (submittedName.length < 5) {
    nameMsg.innerHTML += "The name must be at least 5 characters long! "; 
  }  
  if (/\d/.test(submittedName)) { 
    nameMsg.innerHTML += "The name cannot contain any digits! ";
  }
//subject
  let submittedSubject = subject.value.trim(); 
  console.log("Subject: " + submittedSubject); 
  subjectMsg.innerHTML = "";
  if (submittedSubject.length < 10) {
    subjectMsg.innerHTML += "please enter all 15 digits!"; 
  }  

  // Validate e-mail
  let submittedEmail = email.value.trim();
  console.log("Email: " + submittedEmail); 
  emailMsg.innerHTML = ""; // Clear earlier messages    
  let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailPattern.test(submittedEmail)) {
    emailMsg.innerHTML += "Please enter a valid email";
  }
  
  //address
  let submittedMessage = message.value.trim(); 
  console.log("address: " + submittedMessage); 
  messageMsg.innerHTML = "";
  if (submittedMessage.length < 25) {
    messageMsg.innerHTML += "The address must be at least 25 characters long! "; 
  }  

  // If all fields validate, the form may be submitted
  if (nameMsg.innerHTML === "" && emailMsg.innerHTML === "" && messageMsg.innerHTML === "") {
    console.log ("submitted");
    //form.submit();
  } else {
    console.log ("error");
  }  
  
}


// setTimeout
const loading = document.querySelector(".loader");

