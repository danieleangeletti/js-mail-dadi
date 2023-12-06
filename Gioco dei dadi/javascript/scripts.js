my_cont = document.querySelector(".container");

const n_player = Math.floor(Math.random() * ((6 + 1) - 1) + 1);
const n_computer = Math.floor(Math.random() * ((6 + 1) - 1) + 1);

my_cont.innerHTML += "<span>" + "The player rolled " + n_player + ", " + "</span>";
my_cont.innerHTML += "<span>" + "the computer rolled " + n_computer + "</span>";

if (n_player > n_computer) {
    my_cont.innerHTML += "<h1>" + "The player won" + "</h1>";
}

else if (n_player == n_computer) {
    my_cont.innerHTML += "<h1>" + "No one won" + "</h1>";
}

else {
    my_cont.innerHTML += "<h1>" + "The computer won" + "</h1>";
}