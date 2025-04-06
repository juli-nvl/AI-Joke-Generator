function generateJoke(event) {
  event.preventDefault();
  new Typewriter("#joke", {
    strings: "The joke will appear here",
    autoStart: true,
    delay: 1,
  });
}

let jokeFormElement = document.querySelector("#joke-input");
jokeFormElement.addEventListener("submit", generateJoke);
