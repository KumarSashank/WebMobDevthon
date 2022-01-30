
document.getElementById("contactForm").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  var password = getElementVal("password");
  var emailid = getElementVal("emailid");

  check(password, emailid);
  console.log(password, emailid);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const check = (password, emailid) => {
  if (password =="Anonymous" && emailid =="srmap_hackathon@srmap.edu.in") {
    alert("Login Successful");
    window.location.replace("Admin-Page.html");
    console.log("Login Successful");
  }
  else{
    alert("Login Failed");
    console.log("Login Failed");
    location.reload();
  }
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
