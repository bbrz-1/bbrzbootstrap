console.log(localStorage.getItem('cart'));
let cart = JSON.parse(localStorage.getItem('cart')) || [];

console.log(cart);

cart.forEach((element) => {
    $("#pies").append(
        `<div class="col-12 col-md-6">
            <div class=" card p-2">
                <img src="images/products/${element.image}" class="card-img-top" alt="${element.title}">
                <div class="card-body"> 
                    <h5 class="card-title">${element.title}<span class="float-right">$${element.price}</span></h5>
                    <p class="card-text">${element.description}</p>
                    <button id="sbtn-${element.id}"  class="btn btn-danger">delete</button>
                </div>
            </div>
        </div>`);

    $(`#sbtn-${element.id}`).click(() => {
        cart = cart.filter((item) => item.id !== element.id);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    });
});