function create_new_restaurant(id, img, name, summary) {
    return '<div class="restaurant_card" id="' + id + '"> \
    <img src="' + img + '" alt="' + name + '" width="200px"> \
    <br><br><br> \
    <span>' + name + '</span> \
    <summary>' + summary + '</summary> \
    </div>';
}

//document.onload = function() {
//    console.log("HI");
//    document.getElementById("menu").innerHTML += create_new_item();
//};



