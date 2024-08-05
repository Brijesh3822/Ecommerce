const signup = {
  name: "",
  email: "",
  password: "",
};
console.log(signup);

const email = document.getElementById("email");

email.addEventListener("change", (e) => {
  signup.email = e.target.value;
  console.log(signup);

  //   const name = document.getElementById("fristname").value;
  //   fristname.textContent = name;
});
const fristname = document.getElementById("fristname");
fristname.addEventListener("change", (e) => {
  signup.name = e.target.value;
  console.log(signup);
});

const surname = document.getElementById("surname");
surname.addEventListener("change", (e) => {
  signup.name = signup.name + " " + e.target.value;
  console.log(signup);
});
const password = document.getElementById("password");
password.addEventListener("change", (e) => {
  signup.password = e.target.value;
  console.log(signup);
});

const button = document.getElementById("continue");
button.addEventListener("click", () => {
  const localdata = localStorage.getItem("signupdata") || [];
  const newlocaldata = JSON.parse(localdata);
  var signupdata = [];
  if (newlocaldata.length >= 1) {
    signupdata = [...newlocaldata];
  }
  signupdata.push(signup);
  console.log(signupdata);
  localStorage.setItem("signupdata", JSON.stringify(signupdata));
  window.location.href = "login.html";
  // singupdata=[...singupdata,signup]
});
