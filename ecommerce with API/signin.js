const signup = {
  name: "",
  email: "",
  password: "",
};

const email = document.getElementById("email");
// const emailvalue = email.value;
email.addEventListener("change", (e) => {
  signup.email = e.target.value;
});

const firstname = document.getElementById("firstname");
firstname.addEventListener("change", (e) => {
  signup.name = e.target.value;
});

const lastname = document.getElementById("lastname");
lastname.addEventListener("change", (e) => {
  signup.name = signup.name + " " + e.target.value;
});
const password = document.getElementById("password");
password.addEventListener("change", (e) => {
  signup.password = e.target.value;
});
const button = document.getElementById("buttonsumbit");
button.addEventListener("click", () => {
  const localdata = localStorage.getItem("signupdata");
  const newlocaldata = JSON.parse(localdata);
  var signupdata = [];
  if (newlocaldata) {
    signupdata = [...newlocaldata];
  }
  signupdata.push(signup);
  console.log(signupdata);
  localStorage.setItem("signupdata", JSON.stringify(signupdata));
  window.location.href = "login.html";
});
// button.addEventListener("click", () => {
//   var signupdata = [];
//   if (Object.keys(signup).length === 0) {
//     console.error("Signup object is empty.");
//   } else {
//     signupdata.push(signup);
//     console.log("Signup data:", signupdata);
//     localStorage.setItem("signupdata", JSON.stringify(signupdata));
//     console.log("Data saved to localStorage.");
//   }
// });
