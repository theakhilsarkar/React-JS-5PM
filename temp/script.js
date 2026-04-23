

// html,css,js = web-designer 
// html,css,js+frame works(Node) = frontend web devloper 
// html,css,js+frame works(node) + backend + Reacts = Full Stack Devloper
// html,css,js,frameworks,mangodb,express,reacts,node == MERN Stack Devloper
// express,reacts,node == MERN Stack Devloper

// mangobd - database
// express - frame works
// node(enviromewnt hai) - knows fror  backend but real one is mangobd
// REact - frontend library hai 



// api local,array & object ,DOM and by exam..


// things to do for making API Ecommerce Web..Application 

// 1. takes data by api

fetch("https://dummyjson.com/products") // calling api
    .then((res) => res.json()) // convert to json format 
    .then((data) => { // use by data varibale to store in it
        // console.log(data);
    })

// 2.display them 

const ProductsDivision = document.getElementById("products-div");
let allproducts = [];

// asyncronous function
// awaits used both in functions onlly 
async function addtocart(i) {

    const arr = JSON.parse(localStorage.getItem("carts")) || []; //carts is item name which has to same in setitem too to add more carts in same products list 
    // console.log(allproducts[i]);
    const res = arr.findIndex((e) => e.id === allproducts[i].id);

    if (res == -1) {
        allproducts[i].qty = 1;
        console.log(allproducts[i])
        arr.push(allproducts[i]);
    }
    else {
        arr[res].qty++;
    }

    localStorage.setItem("carts", JSON.stringify(arr));

}
function displayProducts() {
    allproducts.forEach((product, i) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card p-0" style="width: 18rem;">
            <img src="${product.images[0]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.category}</p>
                <p class="card-text fs-5">Price ₹${(product.price * 93).toFixed(2)}/-</p>
                <button onclick="addtocart(${i})" class="btn btn-primary">Add to cart</button>
            </div>
        </div>`;
        ProductsDivision.appendChild(div);
    });
}

async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json();
    allproducts = data.products;
    displayProducts();
}


fetchProducts();

// 3.Add to cart features - localstorage mai add karke new tab mai display karna hoga

// 4.Add to cart (product ko ++ , -- and total counting of element )

// 5.Remove features 
