const n_player = Math.floor(Math.random() * ((6 + 1) - 1) + 1);
const n_computer = Math.floor(Math.random() * ((6 + 1) - 1) + 1);

console.log("The player rolled " + n_player);
console.log("The computer rolled " + n_computer);

if (n_player > n_computer) {
    console.log("The player won");
}

else if (n_player == n_computer) {
    console.log("No one won");
}

else {
    console.log("The computer won");
}