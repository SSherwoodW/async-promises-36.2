let url = "http://numbersapi.com/random/trivia?json";
let numberPromise = axios.get(url);

numberPromise.then((res) => {
    console.log(res.data);
});

let numberFacts = [];
axios
    .get(url)
    .then((num1) => {
        console.log(num1.data.text);
        numberFacts.push(num1.data.text);
        return axios.get(url);
    })
    .then((num2) => {
        console.log(num2.data.text);
        numberFacts.push(num2.data.text);
        return axios.get(url);
    })
    .then((num3) => {
        console.log(num3.data.text);
        numberFacts.push(num3.data.text);
        return axios.get(url);
    })
    .then((num4) => {
        console.log(num4.data.text);
        numberFacts.push(num4.data.text);
        displayNumberFacts(numberFacts);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });

function displayNumberFacts(facts) {
    const factsContainer = document.getElementById("facts-container");

    for (fact of facts) {
        const factElement = document.createElement("p");
        factElement.textContent = fact;
        factsContainer.appendChild(factElement);
    }
}

let favNumBaseUrl = "http://numbersapi.com/69";
let favNumberfacts = [];
let favnumfact = axios.get(favNumBaseUrl).then((res) => {
    console.log(res);
});

axios
    .get(favNumBaseUrl)
    .then((fact1) => {
        console.log(fact1.data);
        favNumberfacts.push(fact1.data);
        return axios.get(favNumBaseUrl);
    })
    .then((fact2) => {
        console.log(fact2.data);
        favNumberfacts.push(fact2.data);
        return axios.get(favNumBaseUrl);
    })
    .then((fact3) => {
        console.log(fact3.data);
        favNumberfacts.push(fact3.data);
        return axios.get(favNumBaseUrl);
    })
    .then((fact4) => {
        console.log(fact4.data);
        favNumberfacts.push(fact4.data);
        displayFavNumberFacts(favNumberfacts);
    })
    .catch((error) => {
        console.log("An error occurred:", error);
    });

function displayFavNumberFacts(facts) {
    const factsContainer = document.getElementById("fav-facts-container");

    for (fact of facts) {
        const factElement = document.createElement("p");
        factElement.textContent = fact;
        factsContainer.appendChild(factElement);
    }
}
