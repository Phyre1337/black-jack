// BlackJack Game
// Christian Torres
// Date: 10-18-19
// Due: 10-24-19

// Defining variables to be used later on
let suit = null; // Defines face and suit variables when picking random card
let face = null;
let faces = null;
let faceLet = null;
let suitLet = null;
let cardPick = null; // Defining value for random card picked
let cardValue = null; // Defining the value of the card from 1-11
let newImg = null; // Defining the variable to display img
let playerScore = 0; // Starts off player and dealer score at 0
let dealerScore = 0;
let hasAce = false;
let dealerHiddenCard = null;

// Defines object for the deck of cards
let cards = {
    Spades: {
        Ace: 11,
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: 10,
        Queen: 10,
        King: 10
    },
    Hearts: {
        Ace: 11,
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: 10,
        Queen: 10,
        King: 10
    },
    Clubs: {
        Ace: 11,
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: 10,
        Queen: 10,
        King: 10
    },
    Diamonds: {
        Ace: 11,
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Jack: 10,
        Queen: 10,
        King: 10
    }
};

// Function to reset all variables to default.
function init()
{
    cards = 
        {
        Spades: {
            Ace: 11,
            Two: 2,
            Three: 3,
            Four: 4,
            Five: 5,
            Six: 6,
            Seven: 7,
            Eight: 8,
            Nine: 9,
            Ten: 10,
            Jack: 10,
            Queen: 10,
            King: 10
        },
        Hearts: {
            Ace: 11,
            Two: 2,
            Three: 3,
            Four: 4,
            Five: 5,
            Six: 6,
            Seven: 7,
            Eight: 8,
            Nine: 9,
            Ten: 10,
            Jack: 10,
            Queen: 10,
            King: 10
        },
        Clubs: {
            Ace: 11,
            Two: 2,
            Three: 3,
            Four: 4,
            Five: 5,
            Six: 6,
            Seven: 7,
            Eight: 8,
            Nine: 9,
            Ten: 10,
            Jack: 10,
            Queen: 10,
            King: 10
        },
        Diamonds: {
            Ace: 11,
            Two: 2,
            Three: 3,
            Four: 4,
            Five: 5,
            Six: 6,
            Seven: 7,
            Eight: 8,
            Nine: 9,
            Ten: 10,
            Jack: 10,
            Queen: 10,
            King: 10
        }
    };

    suit = null;
    face = null;
    faces = null;
    faceLet = null;
    suitLet = null;
    cardPick = null;
    cardValue = null;
    newImg = null;
    playerScore = 0;
    dealerScore = 0;
    hasAce = false;

    document.getElementById("userCards").innerHTML = ""
    document.getElementById("dealBtn").disabled = false;
    document.getElementById("score").innerHTML = "0";
}

// Function with parameter to pick random item from an array
function cardPicker(temp) 
{
    return temp[Math.floor(Math.random() * temp.length)]; // Returns random value from array
};

// Function to randomly pick card.
function random(spot)
{
    if (spot == "player")
    {
        suit = cardPicker(Object.keys(cards)); // Makes array from properties of the "cards" object and pick random property
        faces = Object.keys(cards[suit]); // Gives array from sub-object of "cards"
        face = cardPicker(faces); // Randomly picks property of sub-object

        suitLet = suit.charAt(0); // Stores first letter of suit.

        // Try statement to stop repeats from happening.
        try
        {
            faceLet = face.charAt(0); // Stores first letter of face of card.
        }
        catch (ReferenceError) // Catches ReferenceError and restarts random function
        {
            random(player) // Restarts function
        }
        cardValue = cards[suit][face]; // Gets value of face property to determine the value of the card, used for the scoring system

        newImg = document.createElement("img"); // Creates img element to display card
        newImg.className = "card"; // Gives card class to img to specify styling

        // If... else statement to determine the img file name, format used is [First letter or number of face][First letter of suit].png
        if (face == "Ace") // If card is an Ace or jack...
        {
            newImg.src = `Images/${faceLet}${suitLet}.png`; // Sets src of img element to img name
            document.getElementById("userCards").appendChild(newImg); // Appends img element to div on webpage
            delete cards[suit][face]; // Deletes this card from the deck (cards object)
            hasAce = true; // If the player has an ace, store this in a variable as true
        } 
        else if (face == "Jack")
        {
            newImg.src = `Images/${faceLet}${suitLet}.png`; // Sets src of img element to img name
            document.getElementById("userCards").appendChild(newImg); // Appends img element to div on webpage
            delete cards[suit][face]; // Deletes this card from the deck (cards object)
        }
        else if (face == "Queen" || face == "King") // Same for ones below
        {
            newImg.src = `Images/${faceLet}${suitLet}.png`;
            document.getElementById("userCards").appendChild(newImg);
            delete cards[suit][face];
        }
        else
        {
            newImg.src = `Images/${cardValue}${suitLet}.png`;
            document.getElementById("userCards").appendChild(newImg);
            delete cards[suit][face];
        }

        playerScore += cardValue // Adds card value to player score

        if (hasAce == true && playerScore > 21) // If the player has an ace in their hand, and their score is over 21, change the ace to 1 instead of 11.
        {
            playerScore -= 10; // Subtracts 10 points from player score to change the ace from an 11 to a 1.
            document.getElementById("score").innerHTML = playerScore; // Re-displays the player score
            hasAce = false; // Changes it to false so this function doesn't run again when not supposed to
        }

        if (playerScore > 21) // If the player's score is over 21, the player loses.
        {
            document.getElementById("dealBtn").disabled = true; // Disables the hit button.
            document.getElementById("score").innerHTML = "Busted." // Shows that the player has busted
        }
        else if (playerScore == 21) // If the player's score is 21, they win the game.
        {
            document.getElementById("dealBtn").disabled = true; // Disables the hit button 
            document.getElementById("score").innerHTML = "21!!" // Displays winning message
        }
        else // If the player is still under 21, display player score and just continue
        {
            document.getElementById("score").innerHTML = playerScore; // Displays player score.
        }
    }
    else if (spot == "dealerHidden")
    {
        suit = cardPicker(Object.keys(cards)); // Makes array from properties of the "cards" object and pick random property
        faces = Object.keys(cards[suit]); // Gives array from sub-object of "cards"
        face = cardPicker(faces); // Randomly picks property of sub-object

        suitLet = suit.charAt(0); // Stores first letter of suit.

        // Try statement to stop repeats from happening.
        try
        {
            faceLet = face.charAt(0); // Stores first letter of face of card.
        }
        catch (ReferenceError) // Catches ReferenceError and restarts random function
        {
            random(dealerHidden) // Restarts function
        }

        cardValue = cards[suit][face]; // Gets value of face property to determine the value of the card, used for the scoring system

        if (face == "Ace") // If card is an Ace or jack...
        {
            dealerHiddenCard = `Images/${faceLet}${suitLet}.png`
            delete cards[suit][face];
        } 
        else if (face == "Jack")
        {
            dealerHiddenCard = `Images/${faceLet}${suitLet}.png`
            delete cards[suit][face];
        }
        else if (face == "Queen" || face == "King") // Same for ones below
        {
            dealerHiddenCard = `Images/${faceLet}${suitLet}.png`
            delete cards[suit][face];
        }
        else
        {
            dealerHiddenCard = `Images/${cardValue}${suitLet}.png`
            delete cards[suit][face];
        }
    }
    else if (spot == "dealer")
    {

    }
};

function turns(turn)
{
    if (turn == "start")
    {
        random(player)
        random(player)

        random(dealerHidden)
        random(dealer)
    }
    else if (turn == "hit")
    {
        random(player)
    }
    else
    {
        random(dealer)
    }
}
