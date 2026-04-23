

const cartDivison = document.getElementById("cart-div");
const totalPrice = document.getElementById("total-price");




function removecarts(i) {
    let arr = JSON.parse(localStorage.getItem("carts"));
    arr.splice(i, 1);
    localStorage.setItem("carts", JSON.stringify(arr));
    displaycartproducts();
}

function displaycartproducts() {
    let Total = 0;
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    cartDivison.innerHTML = "";
    carts.forEach((element, i) => {
        Total = Total + (element.price * 93);
        const div = document.createElement("div");
        div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src=${element.images[0]} class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <h5 class="card-price">Price ₹${(element.price * 93).toFixed(2)}/-</h5>
                            <h5 class="card-text">Qty ${element.qty}</h5>
                            <button onclick="removecarts(${i})" class="btn btn-outline-danger">Remove</button>
                        </div>
                    </div>
                </div>
            </div>`;
        cartDivison.appendChild(div)
    });
    totalPrice.textContent = "Total : ₹" + (Total.toFixed(2)) + "/-"
}

displaycartproducts();