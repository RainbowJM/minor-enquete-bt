const inputs = document.querySelectorAll("input[type='text'], input[type='email']");
const inputRadios = document.querySelectorAll("input[type='radio']");
const question_1 = document.getElementById("question-1");
const question_2 = document.getElementById("question-2");
const question_3 = document.querySelector("#question-3");
const inputTextarea = document.getElementById("question-4");
const question_5 = document.querySelector("#question-5");
const question_6 = document.querySelector("#question-6");

loadInput();
loadRadioValue();
loadValueTextarea();

inputs.forEach(input => {
    input.addEventListener('input', saveInput);
});

inputRadios.forEach(radio => {
    radio.addEventListener('change', saveRadioValue);
});

inputTextarea.addEventListener('input', saveValueTextarea);

if (question_1 && question_2) {
    loadValueOfSelect(question_1);
    loadValueOfSelect(question_2);
    saveValueOfSelect(question_1);
    saveValueOfSelect(question_2);
}

function saveInput() {
    if (localStorage) {
        inputs.forEach(input => {
            const inputName = input.name;
            const inputValue = input.value;
            localStorage.setItem(inputName, inputValue);
        });
    }
}

function loadInput() {
    if (localStorage) {
        inputs.forEach(input => {
            const inputName = input.name;
            let storedValue = localStorage.getItem(inputName);
            if (storedValue) {
                input.value = storedValue
            }
        });
    }
}

function saveValueOfSelect(input) {
    if (localStorage) {
        input.addEventListener('change', function () {
            const selectName = this.name;
            const selectValue = this.value
            localStorage.setItem(selectName, selectValue);
        });
    }
}

function loadValueOfSelect(input) {
    if (localStorage) {
        const selectName = input.name;
        let storedSelectValue = localStorage.getItem(selectName);

        if (storedSelectValue) {
            input.value = storedSelectValue;
        }
    }
}

function saveRadioValue() {
    if (localStorage) {
        inputRadios.forEach(radio => {
            const radioName = radio.name;
            const radioValue = radio.value;
            if (radio.checked) {
                localStorage.setItem(radioName, radioValue)
            }
        });
    }
}

function loadRadioValue() {
    if (localStorage) {
        inputRadios.forEach(input => {
            const radioName = input.name;
            let storedValue = localStorage.getItem(radioName);
            if (storedValue && input.value === storedValue) {
                input.checked = true;
            }
        });
    }
}

function saveValueTextarea() {
    if (localStorage) {
        const textareaName = inputTextarea.name;
        const textareaValue = inputTextarea.value;
        localStorage.setItem(textareaName, textareaValue);
    }
}

function loadValueTextarea() {
    if (localStorage) {
        const textareaName = inputTextarea.name;
        let storedValue = localStorage.getItem(textareaName);
        if (storedValue) {
            inputTextarea.value = storedValue;
        }
    }
}

inputRadios.forEach(button => {
    button.addEventListener('change', () => {
        const radioName = button.name;
        const radioValue = button.value;

        if (button.checked) {
            switch (radioName) {
                case "wafs-curriculum":
                    question_3.innerHTML = `Score: ${radioValue}`;
                    break;
                case "wafs-curriculum-explanation":
                    question_5.innerHTML = `Score: ${radioValue}`;
                    break;
                case "wafs-insight":
                    question_6.innerHTML = `Score: ${radioValue}`;
                    break;
                case "cssttr-curriculum":
                    question_3.innerHTML = `Score: ${radioValue}`;
                    break;
                case "cssttr-curriculum-explanation":
                    question_5.innerHTML = `Score: ${radioValue}`;
                    break;
                case "cssttr-insight":
                    question_6.innerHTML = `Score: ${radioValue}`;
                    break;
                case "bt-curriculum":
                    question_3.innerHTML = `Score: ${radioValue}`;
                    break;
                case "bt-curriculum-explanation":
                    question_5.innerHTML = `Score: ${radioValue}`;
                    break;
                case "bt-insight":
                    question_6.innerHTML = `Score: ${radioValue}`;
                    break;
                case "pwa-curriculum":
                    question_3.innerHTML = `Score: ${radioValue}`;
                    break;
                case "pwa-curriculum-explanation":
                    question_5.innerHTML = `Score: ${radioValue}`;
                    break;
                case "pwa-insight":
                    question_6.innerHTML = `Score: ${radioValue}`;
                    break;
                case "rtw-curriculum":
                    question_3.innerHTML = `Score: ${radioValue}`;
                    break;
                case "rtw-curriculum-explanation":
                    question_5.innerHTML = `Score: ${radioValue}`;
                    break;
                case "rtw-insight":
                    question_6.innerHTML = `Score: ${radioValue}`;
                    break;
                case "hcd-curriculum":
                    question_3.innerHTML = `Score: ${radioValue}`;
                    break;
                case "hcd-curriculum-explanation":
                    question_5.innerHTML = `Score: ${radioValue}`;
                    break;
                case "hcd-insight":
                    question_6.innerHTML = `Score: ${radioValue}`;
                    break;
                case "mp-curriculum":
                    question_3.innerHTML = `Score: ${radioValue}`;
                    break;
                case "mp-curriculum-explanation":
                    question_5.innerHTML = `Score: ${radioValue}`;
                    break;
                case "mp-insight":
                    question_6.innerHTML = `Score: ${radioValue}`;
                    break;
                case "wn-curriculum":
                    question_3.innerHTML = `Score: ${radioValue}`;
                    break;
                case "wn-curriculum-explanation":
                    question_5.innerHTML = `Score: ${radioValue}`;
                    break;
                case "wn-insight":
                    question_6.innerHTML = `Score: ${radioValue}`;
                    break;
                default:
                    break;
            }
        }
    });
});