const range = document.querySelector(".card__inputRange");
const price = document.querySelector(".card__priceXmonth");

const slidingButton = document.querySelector(".card__slidingButton");

const slidingTumb = document.querySelector(".card__buttonTumb");

const txtMonth = document.querySelector(".card__priceMonth");

function parseMoney(value, moneda = "COP", idioma = "es-co") {
  const formatMoney = new Intl.NumberFormat(idioma, {
    style: "currency",
    currency: moneda,
    minimumFractionDigits: 2,
  });

  return formatMoney.format(value);
}

function calculateAmount() {
  const amountYear = range.value * 12;
  const discount = (amountYear * 25) / 100;
  const totalYear = amountYear - discount;

  if (slidingButton.classList.contains("card__slidingActive")) {
    txtMonth.innerHTML = "/year";
    price.innerHTML = parseMoney(totalYear);
  } else {
    txtMonth.innerHTML = "/month";
    price.innerHTML = parseMoney(range.value);
  }
}

price.innerHTML = parseMoney(range.value);

range.addEventListener("input", () => {
  const min = range.min;
  const max = range.max;
  const value = range.value;

  calculateAmount();
  range.style.backgroundSize = `${((value - min) / (max - min)) * 100}% 100%`;
});

console.log((range.value * 12 * 25) / 100);

slidingButton.addEventListener("click", () => {
  slidingButton.classList.toggle("card__slidingActive");
  calculateAmount();
});
