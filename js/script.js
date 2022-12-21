var navMenu = document.getElementById("nav-menu");
var menuBtn = document.getElementById("menu-btn");

menuBtn.onclick = function() {
    if(navMenu.className == "open"){
        navMenu.className = "";
    }
    else {
        navMenu.className = "open";
    }
};