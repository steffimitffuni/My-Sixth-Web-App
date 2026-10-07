function showMessage() {
    document.getElementById("message").textContent =
        "This email sign up is still under construction.";
}


function checkWalks() {

    let walks = Number(document.getElementById("walks").value);
    let message = document.getElementById("walkMessage");

    if (walks < 1) {

        message.textContent =
            "Please enter at least 1 walk.";

    }

    else if (walks <= 2) {

        message.textContent =
            "This is too little. Lilo needs to go outside!";

    }

    else if (walks >= 3 && walks <= 4) {

        message.textContent =
            "Lilo would love that!";

    }

    else if (walks >= 5 && walks <= 6) {

        message.textContent =
            "That could be a bit exhausting for her...";

    }

    else if (walks >= 7) {

        message.textContent =
            "This is too much! Let her rest!";

    }

}


function dogQuiz(answer) {

    let message = document.getElementById("quizMessage");

    if (answer === "no") {

        message.textContent =
            "Correct! Lilo doesn't get along with other dogs.";

    }

    else {

        message.textContent =
            "Not quite! Lilo doesn't get along with other dogs.";

    }

}


function nameFriend() {

    let name = document.getElementById("friendName").value;
    let message = document.getElementById("friendMessage");

    if (name === "") {

        message.textContent =
            "Please enter a name!";

    }

    else {

        message.textContent =
            name + " sounds like a great name for Lilo's best friend!";

    }

}