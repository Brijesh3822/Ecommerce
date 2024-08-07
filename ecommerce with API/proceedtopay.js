// total get by localstorage
var total = JSON.parse(localStorage.getItem("total"));
console.log(total);
//print total value in page
const totalnumber = document.getElementById("totalnumber");
totalnumber.innerText = "₹" + total;
const image = document.getElementById("pyamentimage");
const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    alert("Payment Successfull Completed");
    localStorage.removeItem("total");
    localStorage.removeItem("cart");

    window.location.href = "index.html";
});

const loginpersondata = JSON.parse(localStorage.getItem("loginperson"));
console.log(loginpersondata);

const loginperson = document.getElementById("signupname");
if (loginpersondata) {
  loginperson.innerText = loginpersondata;
} else {
  loginperson.innerText = "SingUp";
}
