// ====================== \\
// delicinha.js
// Coded by Tochika
//
// This is the most
// important script
// on our site
//
// After all these years
// I finally did it
//
// Here goes, delicinha lib
//
// ====================== \\

function getRandomInt(min, max) {
    // Get Random Int number
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}

function getDishes(dish) {
    return `/pratos/prato${dish + 1}.html`;
}

function delicinha() {
    let dish = getRandomInt(0, 13);
    let target = getDishes(dish);

    window.location.href = target;
}