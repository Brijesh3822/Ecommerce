window.onload = function () {
  var data = localStorage.getItem("cart");
  console.log(data);
  const obj = JSON.parse(data);
  displayData(obj);
  var total = obj.reduce((cr, pr) => {
    return cr + pr.logo * pr.qty;
  }, 0);
  console.log(total);
  localStorage.setItem("total", JSON.stringify(total));
  const sumoftotal = document.getElementById("sumoftotal");
  sumoftotal.innerText = "₹" + total;
};

function displayData(data) {
  data.map((el) => {
    const addbox = document.getElementById("viewdata");
    addbox.setAttribute("class", "addbox");

    const box2 = document.createElement("div");
    box2.setAttribute("class", "box2");
    const image = document.createElement("img");
    image.setAttribute("src", el.imgUrl);
    image.setAttribute("class", "boximage");

    const boxtext1 = document.createElement("h2");
    boxtext1.innerText = el.name;
    boxtext1.setAttribute("class", "boxtext1");

    const boxrole = document.createElement("div");
    boxrole.setAttribute("class", "boxrole");

    const boxroletext1 = document.createElement("h2");
    boxroletext1.innerHTML = el.role;
    boxroletext1.setAttribute("class", "boxroletext1");

    const boxroletext2 = document.createElement("h2");
    boxroletext2.innerText = el.logo;
    boxroletext2.setAttribute("class", "boxroletext2");

    boxrole.append(boxroletext1, boxroletext2);

    const boxrole2 = document.createElement("div");
    boxrole2.setAttribute("class", "boxrole2");

    const boxrole2buttoon1 = document.createElement("button");
    boxrole2buttoon1.innerText = "+";
    boxrole2buttoon1.setAttribute("class", "boxrole2button1");

    const boxrole2text = document.createElement("span");
    boxrole2text.innerText = "qty";
    boxrole2text.setAttribute("class", "boxrole2text");

    const boxrole2buttoon2 = document.createElement("button");
    boxrole2buttoon2.innerText = "-";
    boxrole2buttoon2.setAttribute("class", "boxrole2button2");

    boxrole2.append(boxrole2buttoon1, boxrole2text, boxrole2buttoon2);

    const boxtext2 = document.createElement("h5");

    boxtext2.innerText = el.detail;
    boxtext2.setAttribute("class", "boxtext2");

    box2.append(image, boxtext1, boxrole, boxrole2, boxtext2);
    addbox.append(box2);
  });
}

// let itemdata = {
//   itemqty: 1,
// };
// if (localStorage.getItem("itemdata") == null) {
//   localStorage.setItem("itemdata", JSON.stringify(itemdata));
// }
