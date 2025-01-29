let div = document.querySelector("div");
let icon = document.querySelector("i");

setTimeout(function() {
    div.style.cssText = "transform: scale(1);"
},5000);

icon.onclick = function() {
    div.style.cssText = "transform: scale(0);";

}

