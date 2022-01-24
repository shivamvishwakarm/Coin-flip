// Addding click event listener in Flip the coin button
document.querySelector(".btn").addEventListener("click", coinLogic); // click event in button
document.querySelector(".coin").addEventListener("click", coinLogic); // click event in coin 

// Fliping the coin  logic
function coinLogic() {
    let randomNumber = Math.floor(Math.random() * 2) //Generating the random number b/w "0 to 1"

    if (randomNumber === 0) {
        let head = "Head";
        addRemoveClass(head) // Call addRemoveClass function for changing the inner text of coin

    } else {
        let tail = "Tail";
        addRemoveClass(tail); // Call addRemoveClass function for changing the inner text of coin

    }
}

// Adding and Removing Flip Animation In Coin 
function addRemoveClass(random) {
    document.querySelector(".coin").classList.add("coin-flip") // Adding coin-flip class 
    setTimeout(() => {
        document.querySelector(".coin").classList.remove("coin-flip"); // Removing coin-flip class
        document.querySelector(".text").innerHTML = random; // changing the text b/w "Head and Tail"

    }, 1000)
}