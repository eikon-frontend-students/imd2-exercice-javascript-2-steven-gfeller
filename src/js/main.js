var boxes = document.querySelectorAll(".product-addtocart");
var conf = document.querySelector(".confirmation");

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    conf.classList.add("is-active");
    setTimeout(function () {
      conf.classList.remove("is-active");
    }, "2000");
  });
});
