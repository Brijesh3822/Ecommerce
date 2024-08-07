function fetchdata() {
  fetch("https://cornet-1.onrender.com/products")
    .then((respones) => respones.json())
    .then((data) => {
      display(data);
    });
}
window.onload = function () {
  fetchdata();
};

function display(data) {
  document.getElementById("dataproducts").innerHTML = "";
  data.map((el) => {
    const dataproducts = document.getElementById("dataproducts");
    dataproducts.setAttribute("class", "dataproducts");

    const deals1 = document.createElement("div");
    deals1.setAttribute("class", "deals1");

    const imagedeals1 = document.createElement("img");
    imagedeals1.setAttribute("class", "imagedeals1");
    imagedeals1.setAttribute("src", el.image);

    const deals1detlis = document.createElement("div");
    deals1detlis.setAttribute("class", "deals1detlis");

    const text1deals = document.createElement("span");
    text1deals.innerText = el.title;
    text1deals.setAttribute("class", "text1deals");

    const deals1subdetlis1 = document.createElement("div");
    deals1subdetlis1.setAttribute("class", "deals1subdetlis1");

    const price = document.createElement("span");
    price.innerText = "Price:-₹" + el.price + "/-";
    // price.innerText = `Price:- ₹${el.price}`;
    price.setAttribute("class", "price");

    const text2price = document.createElement("span");
    text2price.innerText = el.priceoff;
    text2price.setAttribute("class", "text2price");

    deals1subdetlis1.append(price, text2price);

    const reviews = document.createElement("span");
    reviews.innerText = el.category;
    reviews.setAttribute("class", "reviews");

    const text2deals = document.createComment("span");
    text2deals.innerText = el.category;
    // text2deals.setAttribute("class", "text2deals");

    const deals1subdetlis2 = document.createElement("div");
    deals1subdetlis2.setAttribute("class", "deals1subdetlis2");

    const deals1viewdetails = document.createElement("span");
    deals1viewdetails.innerText = "rate :" + el.rating.rate;
    deals1viewdetails.setAttribute("class", "deals1viewdetails");

    const deals1viewdetails2 = document.createElement("span");
    deals1viewdetails2.innerText = "count :" + el.rating.count;
    deals1viewdetails2.setAttribute("class", "deals1viewdetails2");

    const deals1subdetlis3 = document.createElement("div");
    deals1subdetlis2.setAttribute("class", "deals1subdetlis2");

    const buttondeals1text = document.createElement("button");
    buttondeals1text.innerText = "Add to cart";
    buttondeals1text.setAttribute("class", "buttondeals1text");
    buttondeals1text.addEventListener("click", () => {
      addtocart(el);
    });

    const buttondeals2text = document.createElement("button");
    buttondeals2text.innerText = "Delete";
    buttondeals2text.setAttribute("class", "buttondeals2text");
    buttondeals2text.addEventListener("click", () => {
      deleteData(el._id);
    });

    deals1subdetlis2.append(deals1viewdetails, deals1viewdetails2);
    deals1subdetlis3.append(buttondeals1text, buttondeals2text);
    deals1detlis.append(
      text1deals,
      deals1subdetlis1,
      reviews,
      text2deals,
      deals1subdetlis2,
      deals1subdetlis3
    );
    deals1.append(imagedeals1, deals1detlis);
    dataproducts.append(deals1);
  });
}
display(data);

function newdata(nCategories) {
  const nphone = data.filter((el) => {
    return el.Categories == nCategories;
  });
  display(nphone);
}
var cart = [];

function addtocart(data) {
  cart = [...cart, { ...data, qty: 1, id: cart.length + 1 }];
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
}

const newsigninname = document.getElementById("signupname");
const signinnamedata = localStorage.getItem("loginperson");
const newsignupdata = JSON.parse(signinnamedata);
window.onload = function () {
  if (newsignupdata) {
    newsigninname.innerText = newsignupdata;
  } else {
    newsigninname.innerText = "Sign In";
  }
};
const signoutbutton = document.getElementById("signout");
signoutbutton.addEventListener("click", () => {
  localStorage.removeItem("loginperson");
  newsigninname.innerText = "Sign In";
});
console.log(signoutbutton);

// var navbar = document.getElementById("navbartopmenu");
// const navbarlist = document.getElementById("headdiv");
// const navbarToggle =  () => {
//   if (navbarlist.style.display === "block") {
//     navbarlist.style.display = "none";
//   } else {
//     navbarlist.style.display = "block";
//   }
// };

const navbar = document.getElementById("navbartopmenu");
const navbarlist = document.getElementById("headdiv");
const headerdivmain = document.getElementById("headerdivmain");
const navbarToggle = () => {
  navbarlist.classList.toggle("show");
  headerdivmain.classList.toggle("showsecound");
};

function deleteData(id) {
  fetch(`https://cornet-1.onrender.com/products/${id}`, {
    method: "DELETE",
    body: JSON.stringify(),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
// window.onload = function () {
//   window.location.href = "login.html";
// };
// window.onload = function () {
//   newsigninname.innerText = "sign in";
// };

// const loginPerson = sessionStorage.getItem("loginPerson");
// const welcomeMessage = document.getElementById("welcomeMessage");

// if (loginPerson) {
//   welcomeMessage.textContent = `Welcome, ${loginPerson}!`;

//   // Clear session storage after displaying the message
//   sessionStorage.removeItem("loginPerson");
// } else {
//   welcomeMessage.textContent = "No user data found.";
// }
// const phone = document.getElementById("phone");
// phone.addEventListener("click", (el) => {
//   return el.phone;
// });

//  <div class="deals1">
//    <img
//      class="imagedeals1"
//      src="https://themewagon.github.io/electro/img/product01.png"
//    />
//    <div class="deals1detlis">
//      <span class="text1deals">Dell Latitude 7479</span>
//      <div class="deals1subdetlis1">
//        <span>69,000</span>
//        <span class="text2price">89,000</span>
//      </div>
//      <span>8/10(26 Reviews)</span>
//      <span class="text2deals">10% extra discount in icici card</span>
//      <div class="deals1subdetlis2">
//        <span class="deals1viewdetails"> View details </span>
//        <button class="buttondeals1text">Add to cart</button>
//      </div>
//    </div>
//  </div>
