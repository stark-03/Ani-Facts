const URL = "https://animechan.xyz/api/random";
const quote = document.querySelector("#quote");
const anime = document.querySelector("#anime");
const char = document.querySelector("#char");
const btn = document.querySelector(".btn");



const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    quote.innerText = `Quote: ${data['quote']}`;
    anime.innerText = `Anime: ${data['anime']}`;
    char.innerText = `Character: ${data['character']}`;
}
btn.addEventListener("click", getFacts);