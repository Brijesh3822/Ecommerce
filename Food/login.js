const login = {
  email: "abc@gmail.com",
  password: "",
};
// const homepage=document.getElementById("homepage")
const loginemail = document.getElementById("email");
loginemail.addEventListener("change", (e) => {
  login.email = e.target.value;
});

const loginpassword = document.getElementById("password");
loginpassword.addEventListener("change", (e) => {
  login.password = e.target.value;
});
const loginsumbit = document.getElementById("singup");
loginsumbit.addEventListener("click", () => {
  const signupdata1 = localStorage.getItem("signupdata");
  // const newdata = Object.assign({}, signupdata1);
  const newsignupdata = JSON.parse(signupdata1);

  if (newsignupdata.length !== 0) {
    const isemnaildata = newsignupdata.find((el) => el.email == login.email);
    if (isemnaildata) {
      if (login.password == isemnaildata.password) {
        window.location.href = "index.html";
      } else {
        alert("Email or Password wrong");
      }
    } else {
      alert("Email not found");
    }
  }
});
 
const uname = localStorage.getItem("signupdata");
const username=JSON.parse
console.log(uname);
