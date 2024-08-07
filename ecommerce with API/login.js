const logindata = {
  email: "",
  password: "",
};

const email = document.getElementById("email");
email.addEventListener("change", (e) => {
  logindata.email = e.target.value;
  console.log(logindata);
});

const password = document.getElementById("password");
password.addEventListener("change", (e) => {
  logindata.password = e.target.value;
  console.log(logindata);
});
const button = document.getElementById("buttonsumbit");
button.addEventListener("click", () => {
  const singuplocaldata = localStorage.getItem("signupdata");
  const newsignupdata = JSON.parse(singuplocaldata);

  const finddata = newsignupdata.find((el) => el.email == logindata.email);
  if (finddata) {
    if (finddata.password == logindata.password) {
      const loginperson = finddata.name;
      const signinname = document.getElementById("signupname");
      signinname.innerText = loginperson;
      localStorage.setItem("loginperson", JSON.stringify(loginperson));
      console.log(loginperson);
      window.location.href = "index.html";
    } else {
      alert("email or password is wrong");
    }
  } else {
    alert("email not found");
  }
});

//   if (newsignupdata.length !== 0) {
//     const emaildata = newsignupdata.find((el) => el.email == logindata.email);
//     if (emaildata) {
//       if (emaildata.password == logindata.password) {
//         alert("login successfull");
//       } else {
//         alert("Email or Password is Wrong");
//       }
//     } else {
//       alert("Email not found");
//     }
//   }
// });
