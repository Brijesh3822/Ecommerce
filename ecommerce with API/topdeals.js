function ntopdelas(nCategories) {
  const newtopdelas = data.filter((el) => {
    return el.Categories == nCategories;
  });
  console.log(newtopdelas);
}
ntopdelas("topdeals");

const topsdelas2 = document.getElementById("topsdeals");

