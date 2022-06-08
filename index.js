document.getElementById("getJoke_button").addEventListener("click", getJoke);

async function getJoke() {
  let res = await fetch("https://api.chucknorris.io/jokes/random ");
  let data = await res.json();
  document.getElementById("output").innerHTML = data.value;
}