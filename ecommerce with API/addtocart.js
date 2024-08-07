const cartdata = localStorage.getItem("cart");
const newcartdata = JSON.parse(cartdata);
display(newcartdata);
console.log(newcartdata);

var total = newcartdata.reduce((cr, pr) => {
  // return cr + pr.price;
  return cr + pr.price * pr.qty;
}, 0);
const newtotal = document.getElementById("total");
console.log(total);
localStorage.setItem("total", JSON.stringify(total));
newtotal.innerText = total;

const newsigninname = document.getElementById("signupname");
const signinnamedata = localStorage.getItem("loginperson");
const newsignupdata = JSON.parse(signinnamedata);
if (newsignupdata) {
  newsigninname.innerText = newsignupdata;
} else {
  newsigninname.innerText = "Sign In";
}

function display(data) {
  data.map((el) => {

    const dataproducts = document.getElementById("dataproducts");
    dataproducts.setAttribute("class", "dataproducts");

    const deals1 = document.createElement("div");
    deals1.setAttribute("class", "deals1");

    const imagedeals1 = document.createElement("img");
    imagedeals1.setAttribute("class", "imagedeals1");
    imagedeals1.setAttribute("src", el.imgurl);

    const deals1detlis = document.createElement("div");
    deals1detlis.setAttribute("class", "deals1detlis");

    const text1deals = document.createElement("span");
    text1deals.innerText = el.name;
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
    reviews.innerText = el.rating;
    reviews.setAttribute("class", "reviews");

    const text2deals = document.createComment("span");
    text2deals.innerText = el.offerdetils;
    // text2deals.setAttribute("class", "text2deals");

    const deals1subdetlis2 = document.createElement("div");
    deals1subdetlis2.setAttribute("class", "deals1subdetlis2");

    const deals1viewdetails = document.createElement("span");
    deals1viewdetails.innerText = el.view;
    deals1viewdetails.setAttribute("class", "deals1viewdetails");

    const remove = document.createElement("button");
    remove.innerText = "-";
    remove.setAttribute("class", "remove");
    remove.addEventListener("click", () => {
      decrementqty(el.id);
    });

    const displaydata = document.createElement("span");
    displaydata.innerText = el.qty;
    displaydata.setAttribute("class", "displaydata");

    const increment = document.createElement("button");
    increment.innerText = "+";
    increment.setAttribute("class", "increment");
    increment.addEventListener("click", () => {
      incrementqty(el.id);
    });

    deals1subdetlis2.append(deals1viewdetails, remove, displaydata, increment);
    deals1detlis.append(
      text1deals,
      deals1subdetlis1,
      reviews,
      text2deals,
      deals1subdetlis2
    );
    deals1.append(imagedeals1, deals1detlis);
    dataproducts.append(deals1);
  });
}
const proceedtopay = document.getElementById("proceedtopay");
proceedtopay.addEventListener("click", () => {
  location.href = "proceedtopay.html";
});

// function incrementqty(id) {
//   var product = newcartdata.find((el) => {
//     return el.id == id;
//   });

//   var updatedproduct = { ...product, qty: product.qty + 1 };

//   const modifiyproduct = newcartdata.map((el) => {
//     console.log(el);
//   });
//   localStorage.setItem("updatedproduct", JSON.stringify(updatedproduct));

// }
function incrementqty(id) {
  // Retrieve the cart data from localStorage
  var cartData = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cartData);
  // Find the product with the specified id
  var product = cartData.find((el) => el.id == id);

  // If the product is found, increment its quantity
  if (product) {
    product.qty += 1;

    // Update the cart data with the modified product
    cartData = cartData.map((el) => (el.id == id ? product : el));

    // Save the updated cart data to localStorage
    localStorage.setItem("cart", JSON.stringify(cartData));
  } else {
    console.log("Product not found");
  }
  window.onload = location.href = "addtocart.html";
}

// function deleteincqty() {
//   var cartdata = JSON.stringify(localStorage.getItem("cart")) || [];
//   console.log(cartdata);
//   var product = cartdata.find((el) => el.id == id);
//   if (product) {
//     product.qty = product.qty + 1;
//     cartdata = cartdata.map((el) => el.id == id);
//     localStorage.setItem("cart", JSON.stringify(cartdata));
//   } else {
//     console.log("product not found");
//   }
//   window.onload = location.href = "addtocart.html";
// }
function decrementqty(id) {
  var cartdata = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cartdata);
  var product = cartdata.find((el) => el.id == id);
  if (product.qty > 1) {
    product.qty = product.qty - 1;
    cartdata = cartdata.map((el) => (el.id == id ? product : el));
    localStorage.setItem("cart", JSON.stringify(cartdata));
  } else {
    cartdata = cartdata.filter((el) => el.id != id);
    if (cartdata) {
      localStorage.setItem("cart", JSON.stringify(cartdata));
    } else {
      localStorage.removeItem("cart");
    }
  }
  window.onload = location.href = "addtocart.html";
  console.log("remove items successfully");
}
// function decrementqty(id) {
//   var cartData = JSON.parse(localStorage.getItem("cart")) || [];
//   console.log(cartData);

//   var product = cartData.find((el) => el.id == id);

//   if (product) {
//     if (product.qty > 1) {
//       product.qty = product.qty - 1;
//       cartData = cartData.map((el) => (el.id == id ? product : el));
//       localStorage.setItem("cart", JSON.stringify(cartData));
//     } else {
//       cartData = cartData.filter((el) => el.id != id);
//       if (cartData.length > 0) {
//         localStorage.setItem("cart", JSON.stringify(cartData));
//       } else {
//         localStorage.removeItem("cart");
//       }
//     }
//     console.log(product.qty);
//   } else {
//     console.log("product not found");
//   }

//   window.location.href = "addtocart.html";
// }
