const form = document.querySelector ("form#signup");
form.addEventListener("submit", validateForm);

const name = document.querySelector ("input#name");
const subject = document.querySelector ("input#subject");
const email = document.querySelector ("input#email");
const message = document.querySelector ("input#message");


const nameMsg = document.querySelector ("span#nameMsg");
const subjectMsg = document.querySelector ("span#subjectMsg");
const emailMsg = document.querySelector ("span#emailMsg");
const messageMsg = document.querySelector ("span#messageMsg");

function validateForm(e) {
 
  e.preventDefault();

  
  let submittedName = name.value.trim(); 
  console.log("Name: " + submittedName); 
  nameMsg.innerHTML = "";
  if (submittedName.length < 5) {
    nameMsg.innerHTML += "The name must be at least 5 characters long! "; 
  }  
  if (/\d/.test(submittedName)) { 
    nameMsg.innerHTML += "The name cannot contain any digits! ";
  }

  let submittedSubject = subject.value.trim(); 
  console.log("Subject: " + submittedSubject); 
  subjectMsg.innerHTML = "";
  if (submittedSubject.length < 10) {
    subjectMsg.innerHTML += "please enter all 15 digits!"; 
  }  

 
  let submittedEmail = email.value.trim();
  console.log("Email: " + submittedEmail); 
  emailMsg.innerHTML = ""; 
  let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailPattern.test(submittedEmail)) {
    emailMsg.innerHTML += "Must be a valid email";
  }
  
  
  let submittedMessage = message.value.trim(); 
  console.log("address: " + submittedMessage); 
  messageMsg.innerHTML = "";
  if (submittedMessage.length < 25) {
    messageMsg.innerHTML += "Should be more than 25 characters long! "; 
  }  


  if (nameMsg.innerHTML === "" && emailMsg.innerHTML === "" && messageMsg.innerHTML === "") {
    console.log ("submitted");
  } else {
    console.log ("error");
  }  
  
}

const loading = document.querySelector(".loader");

