function generateJoke(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}
function getJoke(event) {
  event.preventDefault();
  let promptInstructions = document.querySelector("#promptInstructions");
  let apiPrompt = `User instructions: Generate a joke of this genre ${promptInstructions.value}`;
  let apiContext =
    "You are a joke expert and love to write jokes of all topics. Your mission is to generate a joke following the user instructions. Add a </br> after the joke and sign it with 'SheCodes AI' inside a <strong> element at the end of the joke";
  let apiKey = "7043o377bb0t07ffedfea40179990f35";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.classList.remove("hidden");
  jokeElement.innerHTML = `<div class="generating">⏳ Generating a joke about "${promptInstructions.value}" for you.</div>`;

  axios.get(apiUrl).then(generateJoke);
}

let jokeFormElement = document.querySelector("#joke-input");
jokeFormElement.addEventListener("submit", getJoke);
