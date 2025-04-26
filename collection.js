var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", () => {
  var enteredValue = event.target.value.toUpperCase();
  for (count = 0; count < productList.length; count++) {
    var productname = productList[count].querySelector("p").textContent;
    if (productname.toUpperCase().indexOf(enteredValue) < 0) {
      productList[count].style.display = "none";
    } else {
      productList[count].style.display = "block";
    }
  }
});
