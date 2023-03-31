const inputs = document.querySelectorAll("input[type='text'], input[type='email']");
const inputRadios = document.querySelectorAll("input[type='radio']")
const question_1 = document.getElementById("question-1");
const question_2 = document.getElementById("question-2");


loadInput();
loadRadioValue();

inputs.forEach(input => {
    input.addEventListener('input', saveInput);
});

inputRadios.forEach(radio => {
    radio.addEventListener('change', saveRadioValue);
})

if (question_1 && question_2) {
    loadValueOfSelect(question_1);
    loadValueOfSelect(question_2);
    saveValueOfSelect(question_1);
    saveValueOfSelect(question_2);
}

function saveInput() {
    inputs.forEach(input => {
        const inputName = input.name;
        const inputValue = input.value;
        localStorage.setItem(inputName, inputValue);
    });
}

function loadInput() {
    inputs.forEach(input => {
        const inputName = input.name;
        let storedValue = localStorage.getItem(inputName);
        if (storedValue) {
            input.value = storedValue
        }
    });
}

function saveValueOfSelect(input) {
    input.addEventListener('change', function () {
        const selectName = this.name;
        const selectValue = this.value
        localStorage.setItem(selectName, selectValue);
    })
}

function loadValueOfSelect(input) {
    const selectName = input.name;
    let storedSelectValue = localStorage.getItem(selectName);

    if (storedSelectValue) {
        input.value = storedSelectValue
    }
}

function saveRadioValue(){
    inputRadios.forEach(radio => {
        const radioName = radio.name;
        const radioValue = radio.value;
        if (radio.checked) {
            localStorage.setItem(radioName, radioValue)
        }
    })
}

function loadRadioValue() {
    inputRadios.forEach(input => {
        const radioName = input.name;
        let storedValue = localStorage.getItem(radioName);
        if (storedValue && input.value === storedValue) {
            input.checked = true;
        }
    });
}