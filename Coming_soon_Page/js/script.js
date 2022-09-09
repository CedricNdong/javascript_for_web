console.log("Autor : Cedric Ndong");

const seconds = document.querySelector(".seconds .number");
const minutes = document.querySelector(".minutes .number");
const hours = document.querySelector(".hours .number");
const days = document.querySelector(".days .number");

let deadlineDate = new Date(" Sep 18, 2022 23:59:58").getTime();

const timeFunction = setInterval(() => {
    let currentDate = new Date().getTime();

    let restTime = deadlineDate - currentDate;

    const tempSecValue = 1000;
    const tempMinValue = tempSecValue * 60;
    const tempHourValue = tempMinValue * 60;
    const tempDayValue = tempHourValue * 24;

    let dayValue = Math.floor(restTime / tempDayValue);
    let hourValue = Math.floor((restTime % tempDayValue) / tempHourValue);
    let minValue = Math.floor((restTime % tempHourValue) / tempMinValue);
    let secValue = Math.floor((restTime % tempMinValue) / tempSecValue);


    if (dayValue === 0) {
    clearInterval(timeFunction);
    }
    seconds.textContent =  `${secValue}` ;
    minutes.textContent = `${minValue}`;
    hours.textContent = `${hourValue}`;
    days.textContent =`${dayValue}`;
  
}, 1000); 



		// Your web app's Firebase configuration
		const firebaseConfig = {
		  apiKey: "AIzaSyBT93muO9XfezDTrTFKmdHRGhC0cDX8_DA",
		  authDomain: "db-lesfutursgeeks.firebaseapp.com",
      databaseURL: "https://db-lesfutursgeeks-default-rtdb.firebaseio.com/",
		  projectId: "db-lesfutursgeeks",
		  storageBucket: "db-lesfutursgeeks.appspot.com",
		  messagingSenderId: "786656424751",
		  appId: "1:786656424751:web:701ac3ec095fa49bd727da"
		};
	  
		// Initialize Firebase
	
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// reference your database
let emailFormDB = firebase.database().ref("emailCollect");

document.getElementById("emailForm").addEventListener("submit", emailSender);

function emailSender(e) {
  e.preventDefault();

  let emailValue = getElementVal("emailID");

  console.log(" it's work ");


  saveEmails(emailValue);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("emailForm").reset();
}

const saveEmails = (emailValue) => {
  let newContactForm = emailFormDB.push();

  newContactForm.set({
    email : emailValue
   
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};




