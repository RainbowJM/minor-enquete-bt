const formInputs = document.querySelectorAll('input[type="text"], input[type="email"]');

loadInputLocal();

formInputs.forEach(input => {
    input.addEventListener('input', saveInputLocal);
});

function saveInputLocal() {
    formInputs.forEach(input => {
    const inputName = input.name; 
    const inputValue = input.value; 
    localStorage.setItem(inputName, inputValue); 
});
}

function loadInputLocal() {
    formInputs.forEach(input => {
        const inputName = input.name;
        let storedValue = localStorage.getItem(inputName);
        if(storedValue){
            input.value = storedValue
        }
    });
}