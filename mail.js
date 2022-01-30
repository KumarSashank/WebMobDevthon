const firebaseConfig = {
  apiKey: "AIzaSyAxoMRF-20E9DzDDcJid2iwNYf1nkDg2nY",
  authDomain: "webdevthon-try.firebaseapp.com",
  databaseURL: "https://webdevthon-try-default-rtdb.firebaseio.com",
  projectId: "webdevthon-try",
  storageBucket: "webdevthon-try.appspot.com",
  messagingSenderId: "721178547487",
  appId: "1:721178547487:web:789e458f8fbf14cac48c2a",
  measurementId: "G-3NJR86V3DN"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var group = getElementVal("group");
  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var number = getElementVal("number");
  var name1 = getElementVal("name1");
  var emailid1 = getElementVal("emailid1");
  var name2 = getElementVal("name2");
  var emailid2 = getElementVal("emailid2");
  var name3 = getElementVal("name3");
  var emailid3 = getElementVal("emailid3");

  saveMessages(group, name, emailid, number, name1, emailid1, name2, emailid2, name3, emailid3);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
  alert("Submitted Successfully");
  window.location.replace("WebMobDevthon.html");
}

const saveMessages = (group, name, emailid, number,name1,emailid1, name2, emailid2, name3, emailid3) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    group: group,
    name: name,
    emailid: emailid,
    number: number,
    name1: name1,
    emailid1: emailid1,
    name2: name2,
    emailid2: emailid2,
    name3: name3,
    emailid3: emailid3,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
