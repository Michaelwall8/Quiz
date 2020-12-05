// Get players array of objects from local storage
let players = JSON.parse(localStorage.getItem("players") || "[]");

// get elements from DOM
let playersList = document.getElementById("highscores")

// create elements
let player;

for (let i = 0; i < players.length; i++){

    // create one element of the highscore list
    // using the data stored in localStorage (array of obj call players)
    player = document.createElement("li");

    // change the new li text in HTML to respective player
    player.innerHTML = "name: " + players[i].name + "        highscore: " + players[i].highscore;

    // add the player in the LI tag to the OL tag in the HTML
    playersList.appendChild(player)


}

let goBackBtn = document.getElementById("resetPage");

let clearBtn = document.getElementById("clear");

goBackBtn.addEventListener("click", function () {
    window.location.reload();
})

clearBtn.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
})
