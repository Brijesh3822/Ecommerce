var openbutton = document.getElementById("buttonheaderdiv5");

var modal = document.getElementById("modal");
var closebutton = document.getElementById("closebuttonmodeldiv1");

// openbutton.onclick = function() {
//    console.log(model.style.display="block");
//    // modal.style.display = "block";
//  }

// closebutton.onclick = function() {
//    console.log(model.style.display="none");
//    // modal.style.display = "none";
//  }

function openorder() {
  model.style.display = "block";
}

function closeorder() {
  model.style.display = "none";
}
var total = localStorage.getItem("total");
document.getElementById("sumoftotal").innerText = "₹" + total;
