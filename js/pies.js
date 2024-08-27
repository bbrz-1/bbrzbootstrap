$(document).ready(function () {
  $.get("../data/pies.json", function (data) {
    data.forEach((element) => {
      $("#pies").append(
        `<div class="col-12 col-md-6">
            <div class=" card p-2">
                <img src="images/products/${element.image}" class="card-img-top" alt="${element.title}">
                <div class="card-body"> 
                    <h5 class="card-title">${element.title}<span class="float-right">$${element.price}</span></h5>
                    <p class="card-text">${element.description}</p>
                    <button id="sbtn-${element.id}"  class="btn btn-danger">Order</button>
                </div>

            </div>
        </div>`
      );

      $(`#sbtn-${element.id}`).click( () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let found = false;
        cart.forEach((item) => {
          if (item.id === element.id) {
            item.quantity++;
            found = true;
          }
        });
        if (!found) {
          cart.push({ ...element, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
      });
    });
  });
});

