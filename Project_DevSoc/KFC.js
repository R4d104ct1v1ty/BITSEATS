var cart = [];

function create_new_item(id, img, name, summary, price, ) {
return '<div class="menu_kfc"> \
    <img src="' + img + '" alt="' + name + '" width="200px"> \
    <span><b>' + name + '</b></span> \
    <summary>' + summary + '</summary> \
    <p>Rs. ' + toString(price) + '/-</p> \
    <button id="' + id  + '">Add to Cart</button> \
    </div>';


function addToCart(name) {
    // Add a row to the table 
    document.getElementById("cart".innerHTML) += "";
    document
}

function addItem(id, img, name, summary) {
    document.getElementById("item_list").innerHTML += create_new_restaurant(id, img, name, summary);
    document.getElementById(id).addEventListener("click", addToCart(name));
}

function displayItem() {
    document.getElementById("item_list").innerHTML += create_new_restaurant("r5", "McDonalds.jpg", "McDonalds", "Burgers");
    document.getElementById("item_list").innerHTML += create_new_restaurant("r6", "dragonpanda.jpg", "Dragon Panda", "Chinese Burgers");
}


document.addEventListener("load", displayItem());