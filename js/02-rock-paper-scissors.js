// USER MAKES A CHOICE

const getPlayer = () => {
    do {
        let choice = String(prompt("Choose Rock, Paper, or Scissors by entering 'r', 'p', or 's':", "Enter r, p, or s here."));
        if (choice === 'r' || choice === 'p' || choice === 's') {
            switch(choice) {
                case 'r':
                    choice = 1;
                    return choice;
                case 'p':
                    choice = 2;
                    return choice;
                case 's':
                    choice = 3;
                    return choice;
            }
            break;
        }
        else {
            alert("You did not enter 'Rock', 'Paper', or 'Scissors'.");
        }
    } while (true);
};



// DISPLAY RESULTS

const converter = function (numChoice) {
    switch (parseInt(numChoice)) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
};


// CONDITIONAL THAT DETERMINES WHO WINS

const rps = (you, com) => {
    if ((com - you) === 1 || (com - you) === -2) {
        alert("You lost... The computer won!");
        status = 1;
    } else if ((com - you) === 0) {
        alert("You tied.\nTry again.");
    }
    else {
        alert("You won! The computer lost.");
        status = 1;
    }
};


// FULL GAME LOOP

let status = 0; //note: this is hoisted to the top, so rps function doesn't give an error.

do {
    // YOUR CHOICE
    let player = getPlayer();

    // COMPUTER MAKES A CHOICE
    let comp = Math.ceil(Math.random() * 3);        //r: 1, p: 2, s: 3

    // DISPLAY RESULTS
    console.log(`You chose ${converter(player)}.\nComputer chose ${converter(comp)}.`);

    // CONDITIONAL THAT DETERMINES WHO WINS
    rps(player, comp);
} while (status === 0);



