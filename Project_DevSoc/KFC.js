
var items = [
    ["Classic Zinger", "Signature chicken burger made with crunchy chicken fillet, veggies & a delicious mayo sauce", 190, "k0", "Classic Zinger.jpg"], 
    ["Wednesday Strips Bucket", "12 pc chicken strips served with 4 delicious dips", 350, "k1", "strips bucket.jpeg"],
    ["Friendship Bucket", "Combo of 3pc Hot & Crispy chicken, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn", 619, "d2", "friendship bucket.jpg"],
    ["2 Veg Krisper Burgers", "2 Veg Krisper Burgers", 158, "d3", "Krisper.jpg"],
    ["Pack of 2 dips", "Adding dips is always a good idea!", 57, "d4", "pack of 2 dips.jpg"]
];
var cart = [];

function createNewItem(id, img, name, summary, price) {
var n = id.slice(1);
return '<div class="menu_kfc"> \
    <img src="' + img + '" alt="' + name + '" width="200px"> \
    <span><b>' + name + '</b></span> \
    <summary>' + summary + '</summary> \
    <p>Rs. ' + price.toString() + '/-</p> \
    <button id="' + id + '" onclick="addToCart(' + n + ')">Add to Cart</button> \
    </div><hr>';
}

function createNewCartItem(index) {
    return '<tr id="cart_item_' + index.toString() + '"> \
            <td>' + items[index][0] + '</td> \
            <td>Rs. ' + items[index][2] + '/-</td> \
            <td><input type="number" name="' + index.toString() + '" class="item_qty" min="1" value="1" onchange="modifyCart()"></td> \
            <td id="cart_total_' +index.toString()+'">Rs.' + items[index][2] + '/-</td> \
            <td><button onclick="removeCartItem(' + index.toString() +')">Remove</button></td> \
            </tr>';
}

function removeCartItem(index) {
    document.getElementById("cart_item_" + index.toString()).remove();
    for (var i = 0; i<cart.length; i++) {
        if (cart[i][0] == index) {
            cart.splice(index, 1);
        }
    }
}

function modifyCart() {
    var itemList = document.getElementsByClassName("item_qty");
    cart = [];
    console.log("HI");
    for (var i = 0; i<itemList.length; i++) {
        var itemQty = itemList[i].value;
        //if (itemQty <= 0) {
        //    var index = itemList[i].id;
        //    console.log(index);
        //    removeCartItem(index);
        //}
        var itemName = parseInt(itemList[i].name);
        var itemRate = items[itemName][2];
        document.getElementById("cart_total_" + itemList[i].name).innerHTML = "Rs." + (itemQty*itemRate).toString() + "/-";
        console.log(itemName); // name of the numerical <input> tag will be the index of the corresponding item in the array "items"
        
        
        cart.push([itemName, itemQty, itemRate]);
    }
    console.log(cart.toString());
}



function addToCart(index) {
    // Add a row to the table (unless it has already been added)
    var isAlreadyAdded = false;
    for (var i = 0; i<cart.length; i++) {
        if (cart[i][0] == index) {
            isAlreadyAdded = true;
            break;
        }
    }
    if (isAlreadyAdded == false) {
        document.getElementById("cart").innerHTML += createNewCartItem(index);
        cart.push([index, 1, items[index][2]]);
    }
    // document.getElementById("poo").addEventListener("change", modifyCart());
}

function addItem(id, img, name, summary, price) {
    document.getElementById("item_list").innerHTML += createNewItem(id, img, name, summary, price);
    var n = parseInt(id.slice(1));
    //document.getElementById(id).onclick = function () {
    //    addToCart(n);
    //};
}

function displayItem() {
    for (var i = 0; i<items.length; i++) {
        addItem(items[i][3], items[i][4], items[i][0], items[i][1], items[i][2]);
    }
}

function goToForm() {
    window.location = "form.html";
}
document.addEventListener("load", displayItem());