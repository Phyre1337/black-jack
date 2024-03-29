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
let hasAce = false; // Player and dealer has ace variable using boolean.
let dealerHasAce = false; 
let dealerHiddenCard = null; // Variable to hold dealer's face down card.
let dealerBusted = false; // Boolean variable to determine if player or dealer has busted.
let playerBusted = false;

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

// Function to reset all variables to default, does everything above.
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
    dealerHasAce = false;
    dealerHiddenCard = null;
    dealerBusted = false;
    playerBusted = false;

    document.getElementById("userCards").innerHTML = "";
    document.getElementById("dealerCards").innerHTML = "";
    document.getElementById("dealBtn").disabled = false;
    document.getElementById("hitBtn").disabled = true;
    document.getElementById("stayBtn").disabled = true;
    document.getElementById("resetBtn").disabled = true;
    document.getElementById("dealerScore").innerHTML = "";
    document.getElementById("score").innerHTML = "0";
    document.getElementById("winningMsg").innerHTML = "";
}

// Function with parameter to pick random item from an array
function cardPicker(temp) 
{
    return temp[Math.floor(Math.random() * temp.length)]; // Returns random value from array
};

// Function to randomly pick card.
function random(spot)
{
    if (spot == "player") // Parameter to draw a player card
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
            random('player') // Restarts function
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
        else if (face == "Queen" || face == "King" || face == "Jack") // Same for ones below
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
            document.getElementById("hitBtn").disabled = true; // Disables the hit button.
            document.getElementById("score").innerHTML = "Busted." // Shows that the player has busted
            playerBusted = true;
            end();
        }
        else if (playerScore == 21) // If the player's score is 21, they win the game.
        {
            document.getElementById("hitBtn").disabled = true; // Disables the hit button 
            document.getElementById("score").innerHTML = "21!!" // Displays winning message
        }
        else // If the player is still under 21, display player score and just continue
        {
            document.getElementById("score").innerHTML = playerScore; // Displays player score.
        }
    }
    else if (spot == "dealerHidden") // Parameter to display hidden dealer card
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
            random('dealerHidden') // Restarts function
        }

        cardValue = cards[suit][face]; // Gets value of face property to determine the value of the card, used for the scoring system

        if (face == "Queen" || face == "King" || face == "Ace" || face == "Jack") // Same for ones below
        {
            dealerHiddenCard = `Images/${faceLet}${suitLet}.png`
            delete cards[suit][face];
        }
        else
        {
            dealerHiddenCard = `Images/${cardValue}${suitLet}.png`
            delete cards[suit][face];
        }

        dealerScore += cardValue; // Adds card value to dealer score

        newImg = document.createElement("img"); // Creates img element to display card
        newImg.className = "card"; // Gives card class to img to specify styling

        newImg.src = `Images/gray_back.png`; // Chooses src of face down card
        newImg.id = 'faceDown'; // Gives face down card id
        document.getElementById("dealerCards").appendChild(newImg); // Displays face down card
    }
    else if (spot == "dealer") // Parameter to draw dealer card
    {
        suit = cardPicker(Object.keys(cards)); // Makes array from properties of the "cards" object and pick random property
        faces = Object.keys(cards[suit]); // Gives array from sub-object of "cards"
        face = cardPicker(faces); // Randomly picks property of sub-object

        suitLet = suit.charAt(0); // Stores first letter of suit.

        // Try statement to stop repeats from happening.
        try {
            faceLet = face.charAt(0); // Stores first letter of face of card.
        }
        catch (ReferenceError) // Catches ReferenceError and restarts random function
        {
            random('dealer') // Restarts function
        }

        cardValue = cards[suit][face]; // Gets value of face property to determine the value of the card, used for the scoring system

        newImg = document.createElement("img"); // Creates img element to display card
        newImg.className = "card"; // Gives card class to img to specify styling

        // If... else statement to determine the img file name, format used is [First letter or number of face][First letter of suit].png
        if (face == "Ace") // If card is an Ace or jack...
        {
            newImg.src = `Images/${faceLet}${suitLet}.png`; // Sets src of img element to img name
            document.getElementById("dealerCards").appendChild(newImg); // Appends img element to div on webpage
            delete cards[suit][face]; // Deletes this card from the deck (cards object)
            dealerHasAce = true; // If the player has an ace, store this in a variable as true
        }
        else if (face == "Queen" || face == "King" || face == "Jack") // Same for ones below
        {
            newImg.src = `Images/${faceLet}${suitLet}.png`;
            document.getElementById("dealerCards").appendChild(newImg);
            delete cards[suit][face];
        }
        else {
            newImg.src = `Images/${cardValue}${suitLet}.png`;
            document.getElementById("dealerCards").appendChild(newImg);
            delete cards[suit][face];
        }

        dealerScore += cardValue // Adds card value to dealer score

        if (dealerHasAce == true && dealerScore > 21) // If the dealer has an ace in their hand, and their score is over 21, change the ace to 1 instead of 11.
        {
            dealerScore -= 10; // Subtracts 10 points from dealer score to change the ace from an 11 to a 1.
            dealerHasAce = false; // Changes it to false so this function doesn't run again when not supposed to
        }

        if (dealerScore > 21) // If the dealer's score is over 21, the dealer loses.
        {
            dealerBusted = true;
        }
    }
};

function turns(turn) // Function to go on a turn-by-turn basis
{
    if (turn == "start") // Parameter for starting turn
    {
        document.getElementById('dealBtn').disabled = true; // Disables and enables needed buttons
        document.getElementById('hitBtn').disabled = false;
        document.getElementById('stayBtn').disabled = false;

        random('player'); // Deals out two cards to each player, one face down for dealer
        random('player');

        random('dealerHidden');
        random('dealer');
    }
    else if (turn == "hit") // Parameter to deal player a card
    {
        random('player'); // Deals player a card
    }
};

function end() // Function to end the game
{
    document.getElementById("stayBtn").disabled = true; // Disables not needed buttons
    document.getElementById("hitBtn").disabled = true;

    while (playerBusted == false && dealerScore < 17) // While dealer is under 17 in card value, draw another card
    {
        random('dealer');
    }

    if (playerBusted == true || dealerScore >= 17) // If the dealer has 17 in card value or more, stop drawing cards and determine who won
    {
        if (dealerScore > 21) // Checks if dealer has busted and displays score or that they busted.
        {
            document.getElementById("dealerScore").innerHTML = "Busted."; // Displays that dealer busted.
            dealerBusted = true;
        }
        else
        {
            document.getElementById("dealerScore").innerHTML = dealerScore; // Displays dealer's hidden card and score
        }

        document.getElementById("faceDown").src = dealerHiddenCard; // Displays dealer's hidden card.

        // Score system to determine who wins and loses the game
        if (dealerBusted == false && playerScore < dealerScore) // If the dealer hasn't busted and is greater than the player, they win
        {
            document.getElementById("winningMsg").innerHTML = "Dealer Wins!";
        }
        else if (playerBusted == false && playerScore > dealerScore) // If the player hasn't busted and is greater than the dealer, they win
        {
            document.getElementById("winningMsg").innerHTML = "Player Wins!";
        }
        else if (dealerBusted == true && playerBusted == false) // If the dealer busts and the player hasn't, player wins
        {
            document.getElementById("winningMsg").innerHTML = "Player Wins!";
        }
        else if (playerBusted == true && dealerBusted == false) // If the player busts and the dealer hasn't, dealer wins
        {
            document.getElementById("winningMsg").innerHTML = "Dealer Wins!";
        }
        else if (playerBusted == true && dealerBusted == true) // If both bust, nobody wins
        {
            document.getElementById("winningMsg").innerHTML = "Nobody Wins...";
        }
        else if (dealerBusted == false && playerBusted == false && playerScore == dealerScore) // If both tie, nobody wins
        {
            document.getElementById("winningMsg").innerHTML = "Push - Nobody Wins...";  
        }
        document.getElementById("resetBtn").disabled = false; // Enables the button to reset game
    }
}
