const input = document.querySelector("input");
const cards = document.querySelectorAll(".card");

input.addEventListener("input", () => {
  const value = input.value.toLowerCase();

  cards.forEach(card => {
    const name = card.innerText.toLowerCase();
    card.style.display = name.includes(value) ? "block" : "none";
  });
});
