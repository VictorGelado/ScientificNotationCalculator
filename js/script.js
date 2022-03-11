const numberInput = document.querySelector("#number");
const submitButton = document.querySelector("#calc");
const result = document.querySelector("#result");


submitButton.addEventListener('click', calcNotation, false);

function calcNotation(eve) {
  eve.preventDefault();

  let number = Number(numberInput.value);
  // let numberLength = number.toString().length - 1; 

  let resultNotation = '';


    let numberNotation = number.toExponential();

    let indexE = indexofE(numberNotation);

    let exponent = numberNotation.indexOf('+') != -1? numberNotation.toString().substring(indexE).replace('+', ''): numberNotation.toString().substring(indexE);
    
    numberNotation = numberNotation.slice(0, indexE - 1);

    resultNotation = `<p>${numberNotation} x 10<sup>${exponent}</sup></p>`;

    result.innerHTML  = resultNotation.replace('.', ',');
 
}

function indexofE(numberNotation) {
  let index = -1;
  
  if (numberNotation.indexOf('+') != -1) {
    index = numberNotation.toString().indexOf('+');
  } else if (numberNotation.indexOf('-') != -1) {
    index = numberNotation.toString().indexOf('-');
  }

  return index;
}





/* 
    for (let c = numberLength; c >= 1; c--) {
      numberNotation /= 10;
    } */
    
    // numberNotation = math.format(numberNotation,  {notation: 'fixed'});