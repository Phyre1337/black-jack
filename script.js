// BlackJack Game
// Christian Torres
// Date: 10-18-19
// Due: 10-24-19

let suit = null;
let face = null;
let faces = null;
let faceLet = null;
let suitLet = null;
let cardPick = null;
let cardValue = null;
let newImg = null;
let playerScore = 0;
let dealerScore = 0;

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
}

function cardPicker(temp) 
{
    return temp[Math.floor(Math.random() * temp.length)];
};

function random()
{
    suit = cardPicker(Object.keys(cards));
    faces = Object.keys(cards[suit]);
    face = cardPicker(faces);

    suitLet = suit.charAt(0);
    try
    {
        faceLet = face.charAt(0);
    }
    catch (error)
    {
        random()
    }
    cardValue = cards[suit][face];

    newImg = document.createElement("img");
    newImg.className = "card";

    if (face == "Ace" || face == "Jack")
    {
        try{
            newImg.src = `Images/${faceLet}${suitLet}.png`;
            document.getElementById("userCards").appendChild(newImg);
            delete cards[suit][face];
        }
        catch (error)
        {
            random();
        }
    } 
    else if (face == "Queen" || face == "King")
    {
        try 
        {
            newImg.src = `Images/${faceLet}${suitLet}.png`;
            document.getElementById("userCards").appendChild(newImg);
            delete cards[suit][face];
        } 
        catch (error) 
        {
            random();
        }
    }
    else
    {
        try 
        {
            newImg.src = `Images/${cardValue}${suitLet}.png`;
            document.getElementById("userCards").appendChild(newImg);
            delete cards[suit][face];
        } 
        catch (error) 
        {
            random();
        }
    }


};



/* var ran = cardPicker(Object.keys(cards.Diamonds))
var ran1 = ran.charAt(0)
console.log(ran1) */
