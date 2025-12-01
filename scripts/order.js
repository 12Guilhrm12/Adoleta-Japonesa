// ============ \\
// order.js
// 
// controls the order
// button and etc
//
// ============ \\

// Order Code
const counter = document.getElementById('numA');
var mount = 0;

function add_mount() {
    mount = mount + 1;
    update_mount();
}

function minus_mount() {
    if (mount > 0) {
        mount = mount - 1;
    }
    update_mount();
}

function update_mount() {
    counter.textContent = mount;
}

// Order Conclussion
function buy() {
    if (mount > 0) {
        var audio = document.getElementById("ding");
        audio.play();
    }
    mount = 0;
    update_mount();
}
