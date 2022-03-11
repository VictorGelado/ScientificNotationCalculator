const numberInput = document.querySelector("#number");
const submitButton = document.querySelector("#calc");
const result = document.querySelector("#result");



submitButton.addEventListener('click', calcNotation, false);

function calcNotation(eve) {
  eve.preventDefault();

  let number = Number(numberInput.value);

  let numberString = number.toString();

  let resultNotation = '';

  let div = numberString.length - 1; 

  if (number >= 10) {
    let numberNotation = number;

    for (let c = div; c >= 1; c--) {
      numberNotation /= 10;
    }

    resultNotation = `<p>${numberNotation} x 10<sup>${div}</sup></p>`;

    result.innerHTML  = resultNotation;
  }
}

