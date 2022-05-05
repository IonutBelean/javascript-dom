const value1Input = document.querySelector("#value1");
const value2Input = document.querySelector("#value2");
const buttonPlus = document.querySelector(".button-plus");
const buttonMinus = document.querySelector(".button-minus");
const buttonTimes = document.querySelector(".button-times");
const buttonFraction = document.querySelector(".button-fraction");
const calcResult = document.querySelector(".calc-result")



const addValidationToNumberInput = ( inputElement, inputLabel) => {

    inputElement.addEventListener("input", (event) => {
        const value = event.target.value;

        if (isNaN(value)) {
            calcResult.innerHTML = `${inputLabel} are valoare gresita`;
        } else {
            calcResult.innerHTML = "";
        }
    });
};

addValidationToNumberInput(value1Input, "Input1");
addValidationToNumberInput(value2Input, "Input2");

const handleOperation = (button, operation) => {

    button.addEventListener("click", (event) => {
        event.preventDefault();
    
        if (operation === "plus") {
            const result = Number(value1Input.value) + Number(value2Input.value);
            calcResult.innerHTML = `Resultatul operatiei este ${result}`;
        } else if (operation === "minus") {
            const result = Number(value1Input.value) - Number(value2Input.value);
            calcResult.innerHTML = `Resultatul operatiei este ${result}`;
        } else if (operation === "times") {
            const result = Number(value1Input.value) * Number(value2Input.value);
            calcResult.innerHTML = `Rezultatul operatiei este ${result}`;
        } else if (operation === "fraction") {
            if (Number(value2Input.value) === 0) {
                calcResult.innerHTML = "Nu se poate imparti la 0";
            } else {
                const result = Number(value1Input.value) / Number(value2Input.value);
                calcResult.innerHTML = `Rezultatul operatiei este ${result}`;
            };
        };

    });

};

handleOperation(buttonPlus, "plus");
handleOperation(buttonMinus, "minus");
handleOperation(buttonTimes, "times");
handleOperation(buttonFraction, "fraction");



/*
buttonPlus.addEventListener("click", (event) => {
    event.preventDefault();

    const sum = Number(value1Input.value) + Number(value2Input.value);
    calcResult.innerHTML = `Resultatul operatiei este ${sum}`;
});

buttonMinus.addEventListener("click", (event) => {
    event.preventDefault();

    const difference = Number(value1Input.value) - Number(value2Input.value);
    calcResult.innerHTML = `Resultatul operatiei este ${difference}`;
});

buttonTimes.addEventListener("click", (event) => {
    event.preventDefault();

    const times = Number(value1Input.value) * Number(value2Input.value);
    calcResult.innerHTML = `Resultatul operatiei este ${times}`;
});

buttonFraction.addEventListener("click", (event) => {
    event.preventDefault();
    if(Number(value2Input.value) === 0) {
        calcResult.innerHTML = "Nu se poate imparti la 0"
    } else {
        const fraction = Number(value1Input.value) / Number(value2Input.value);
        calcResult.innerHTML = `Resultatul operatiei este ${fraction}`;
    }
});
*/

