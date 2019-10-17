let suit = ["Spades", "Hearts", "Clubs", "Diamonds"];
let face = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
let cardFace = null;
let cardSuit = null;

function pickCard()
{
    cardFace = face[Math.floor(Math.random() * face.length)];

    switch (cardFace)
    {
        case "Ace":
            cardSuit = suit[Math.floor(Math.random() * suit.length)];
            break;
        case "2":
            cardSuit = suit[Math.floor(Math.random() * suit.length)];
            break;
        case "3":
            cardSuit = suit[Math.floor(Math.random() * suit.length)];
            break;
        case "4":
            cardSuit = suit[Math.floor(Math.random() * suit.length)];
            break;
        case "5":
            cardSuit = suit[Math.floor(Math.random() * suit.length)];
            break;
        case "6":
            cardSuit = suit[Math.floor(Math.random() * suit.length)];
            break;
        case "7":
            cardSuit = suit[Math.floor(Math.random() * suit.length)];
            break;
        case "8":
            cardSuit = suit[Math.floor(Math.random() * suit.length)];
            break;
        case "9":
            cardSuit = suit[Math.floor(Math.random() * suit.length)];
            break;
        case "10":
            cardSuit = suit[Math.floor(Math.random() * suit.length)];
            break;
        case "Jack":
            cardSuit = suit[Math.floor(Math.random() * suit.length)];
            break;
        case "Queen":
            cardSuit = suit[Math.floor(Math.random() * suit.length)];
            break;
        case "King":
            cardSuit = suit[Math.floor(Math.random() * suit.length)];
            break;
    }
}