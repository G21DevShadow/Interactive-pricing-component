const range = document.querySelector(".card__inputRange");
const price = document.querySelector(".card__priceXmonth");

price.innerHTML = range.value;

range.addEventListener("input", () => {
  const min = range.min;
  const max = range.max;
  const value = range.value;

  price.innerHTML = value;
  range.style.backgroundSize = `${((value - min) / (max - min)) * 100}% 100%`;
});
