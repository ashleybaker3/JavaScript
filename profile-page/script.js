console.log("page loaded...");

function hide(element) {
    var connect = document.getElementById('todd');
    connect.remove();
}

function hide1(element) {
    var disconnect = document.getElementById('phil');
    disconnect.remove();
}

var num = [2,418];
var connections = [document.querySelector("#requests"), document.querySelector("#yourCons")];

function connecting(alt) {

    if (alt == "accept") {
        num[0]--;
        num[1]++;
        connections[0].innerText = num[0];
        connections[1].innerText = num[1];
    } else {
        num[0]--;
        connections[0].innerText = num[0];
    }
}

function nameChange() {
    var name = document.querySelector('#name');
    var change = prompt("Change your name here");
    name.innerText = change;
}