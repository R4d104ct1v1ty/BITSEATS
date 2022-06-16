function createNewRestaurant(id, img, name, summary, link) {
    return '<div class="restaurant_card" onclick=\'goTo("'+link+'")\'> \
    <img src="' + img + '" alt="' + name + '" width="200px"> \
    <br><br><br> \
    <span>' + name + '</span> \
    <summary>' + summary + '</summary> \
    </div>';
}

function goTo(link) {
    window.location = link;
}

//document.onload = function() {
//    console.log("HI");
//    document.getElementById("menu").innerHTML += create_new_item();
//};

function addRestaurant(id, img, name, summary, link) {
    document.getElementById("restaurant_list").innerHTML += createNewRestaurant(id, img, name, summary, link);
    //document.getElementById(id).onclick = function() {
    //    window.location = link;
    //};
}

function displayRestaurants() {
    // Replace HTML with addRestaurant functionality
    
    
    addRestaurant("kfc", "KFC.jpg", "KFC", "American, fast-food", "KFC.html");
    addRestaurant("mcd", "Domino's.jpg", "Domino's", "American, Pizza, Pasta", "Dominos.html");
}

document.addEventListener("load", displayRestaurants());