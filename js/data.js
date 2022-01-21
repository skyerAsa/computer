var show = document.getElementById("show");
var showmin = document.getElementById("showmin");
var x = "";
var z = "";
var tt = "";

function keynumber(num) {
    if (x.length < 9) {
        x += num;
        show.innerText = x;
    }
}
//如果z不等於空值  x等於空值
function add() {
    var tt = show.innerText;
    //如果 z 是空值
    if (z == "") {
        z = tt;
        x = "";
        show.innerText = "0";
    }
    //z不等於空值 x也不等於空值
    else if (z != "" && x != "") {
        z = eval((z += x));
        x = "";
        show.innerText = "0";
    } else if (!x.includes("+" && "-" && "*" && "/")) {
        z = showmin.innerText.substr(0, showmin.innerText.length - 1);
    }
    z += "+";
    showmin.innerHTML = z;
}

function sub() {
    var tt = show.innerText;

    if (z == "") {
        z = tt;
        x = "";
        show.innerText = "0";
    } else if (z != "" && x != "") {
        z = eval((z += x));
        x = "";
        show.innerText = "0";
    } else if (!x.includes("+" && "-" && "*" && "/")) {
        z = showmin.innerText.substr(0, showmin.innerText.length - 1);
    }
    z += "-";
    showmin.innerHTML = z;
}

function multi() {
    var y = show.innerText;
    if (z == "") {
        z = y;
        x = "";
        show.innerText = "0";
    } else if (z != "" && x != "") {
        z = eval((z += x));
        x = "";
        show.innerText = "0";
    } else if (!x.includes("+" && "-" && "*" && "/")) {
        z = showmin.innerText.substr(0, showmin.innerText.length - 1);
    }
    z += "*";
    showmin.innerHTML = z;
}

function division() {
    var y = show.innerText;

    if (z == "") {
        z = y;
        x = "";
        show.innerText = "0";
    } else if (z != "" && x != "") {
        z = eval((z += x));
        x = "";
        show.innerText = "0";
    } else if (!x.includes("+" && "-" && "*" && "/")) {
        z = showmin.innerText.substr(0, showmin.innerText.length - 1);
    }
    z += "/";
    showmin.innerHTML = z;
}

function dot() {
    if (!x.includes(".")) {
        if (x == "") {
            x = "0.";
            show.innerText = x;
        } else {
            x = x + ".";
            show.innerText = x;
        }
    }
}

function equal() {
    var tt = parseFloat(eval(showmin.innerHTML + x).toFixed(10));
    show.innerHTML = tt;
    z = "";
    showmin.innerText = z;
}

function showclear() {
    x = "";
    z = "";
    show.innerText = "0";
    showmin.innerText = "";
}

function showdel() {
    if (show.innerText.length == 1) {
        x = "";
        show.innerText = "0";
    } else {
        x = show.innerText.substr(0, show.innerText.length - 1);
        show.innerText = x;
    }
}