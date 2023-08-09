baseUrl = "https://deckofcardsapi.com/api/deck";
let deck_id;

function shuffleAndShow1() {
    axios
        .get(`${baseUrl}/new/shuffle`)
        .then((response) => {
            console.log(response.data.deck_id);
            let deck_id = response.data.deck_id;
            return axios.get(`${baseUrl}/${deck_id}/draw/?count=1`);
        })
        .then((response) => {
            console.log(response);
            console.log(
                `Your card is the ${response.data.cards[0].value} of ${response.data.cards[0].suit}`
            );
            console.log(`cards remaining: ${response.data.remaining}`);
        });
}

const shuffleButton = document.getElementById("shuffleButton");
shuffleButton.addEventListener("click", shuffleAndShow1);

function getTwoCards() {
    axios
        .get(`${baseUrl}/new/draw/?count=1`)
        .then((response) => {
            console.log(
                `Your first card is the ${response.data.cards[0].value} of ${response.data.cards[0].suit}`
            );
            let deck_id = response.data.deck_id;
            return axios.get(`${baseUrl}/${deck_id}/draw/?count=1`);
        })
        .then((response) => {
            console.log(
                `Your second card is the ${response.data.cards[0].value} of ${response.data.cards[0].suit}`
            );
            console.log(`cards remaining: ${response.data.remaining}`);
        });
}

function displayCardImage(card) {
    const imageContainer = document.getElementById("card-container");
    const imageElement = document.createElement("img");
    imageElement.src = card;
    imageContainer.appendChild(imageElement);
}

function dealCard() {
    axios.get(`${baseUrl}/${deck_id}/draw/?count=1`).then((response) => {
        if (response.data.remaining === 0) {
            console.log("The deck is empty.");
            document.getElementById("dealButton").disabled = true; // Disable the button
            return;
        }
        console.log(
            `Your card is the ${response.data.cards[0].value} of ${response.data.cards[0].suit}`
        );

        let cardImage = response.data.cards[0].images.png;
        displayCardImage(cardImage);
        console.log(`Cards remaining: ${response.data.remaining}`);
    });
}

function newDeck() {
    axios.get(`${baseUrl}/new/shuffle`).then((response) => {
        deck_id = response.data.deck_id;
        console.log(`New deck created with deck_id: ${deck_id}`);
        document.getElementById("dealButton").disabled = false;
        dealCard();
    });
    // .then((response) => {});
}
document.addEventListener("DOMContentLoaded", function () {
    newDeck();
});

const dealButton = document.getElementById("dealButton");
dealButton.addEventListener("click", dealCard);
