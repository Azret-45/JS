let minValue = parseInt(prompt("Минимальное знание числа для игры -999", "0"));
let maxValue = parseInt(prompt("Максимальное знание числа для игры 999", "100"));

function validateValue(value, defaultValue) {
  return isNaN(value) ? defaultValue : value;
}

minValue = validateValue(minValue, -999);
maxValue = validateValue(maxValue, 999);

// function formatNumber(number) {
//   const numberStr = number.toString();
//   return numberStr.length < 20 ? numberStr : number;
// }

minValue = (minValue < -999) ? 0 : (minValue > 999) ? 100 : minValue;
maxValue = (maxValue < -999) ? 0 : (maxValue > 999) ? 100 : maxValue;
alert(
  `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`
);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById("orderNumberField");
const answerField = document.getElementById("answerField");

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById("btnRetry").addEventListener("click", function () {
  minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));
  maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));

  if (isNaN(minValue) || isNaN(maxValue) || minValue >= maxValue) {
    alert(
      "Пожалуйста, введите корректные значения. Минимум должен быть меньше максимума."
    );
    return;
  }

  orderNumber = 1;
  answerNumber = Math.floor((minValue + maxValue) / 2);
  gameRun = true;
  
  orderNumberField.innerText = orderNumber;
  answerField.innerText = `Вы загадали число ${formatNumber(answerNumber)}?`;
});

document.getElementById("btnOver").addEventListener("click", function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.floor(Math.random() * 3);
      const answerPhrase =
        phraseRandom === 1
          ? `Вы загадали неправильное число!\n\u{1F914}`
          : phraseRandom === 2
          ? `Я сдаюсь..\n\u{1F92F}`
          : `Вы уверены в своём числе?`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      minValue = answerNumber + 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const phraseRandom = Math.floor(Math.random() * 3);
      const answerPhrase =
        phraseRandom === 1
          ? `Может это число... ${answerNumber}?`
          : phraseRandom === 2
          ? `Вы загадали число ${answerNumber}?`
          : `Ваше число ${answerNumber}?`;

      answerField.innerText = answerPhrase;
    }
  }
});

document.getElementById("btnLess").addEventListener("click", function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.floor(Math.random() * 3);
      const answerPhrase =
        phraseRandom === 1
          ? `Вы загадали неправильное число!\n\u{1F914}`
          : phraseRandom === 2
          ? `Я сдаюсь..\n\u{1F92F}`
          : `Вы уверены в своём числе?`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      maxValue = answerNumber;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const phraseRandom = Math.floor(Math.random() * 3);
      const answerPhrase =
        phraseRandom === 1
          ? `Может это число... ${answerNumber}?`
          : phraseRandom === 2
          ? `Вы загадали число ${answerNumber}?`
          : `Ваше число ${answerNumber}?`;

      answerField.innerText = answerPhrase;
    }
  }
});

document.getElementById("btnEqual").addEventListener("click", function () {
  if (gameRun) {
    const phraseRandom = Math.floor(Math.random() * 3);
    const answerPhrase =
      phraseRandom === 1
        ? `Я всегда угадываю`
        : phraseRandom === 2
        ? `Это было слишком просто`
        : `Давай с начала`;

    answerField.innerText = answerPhrase;
    gameRun = false;
  }
});

