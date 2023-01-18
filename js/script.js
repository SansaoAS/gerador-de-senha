//Seleção de elementos
const generatePasswordButton =  document.querySelector("#generate-password");
const generatePasswordElement =  document.querySelector("#generated-password");

// Funções 
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};


const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSimbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)]; 
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSimbol) => {
   

    let password = "";

    const passwordlenght = 10;

    const generator = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSimbol
    ]

    for(i=0; i < passwordlenght; i = i+4){
        generator.forEach(() => {
            const randomValue = 
            generator[Math.floor(Math.random() * generator.length)]();
            
        password += randomValue;
        });
    }
   
    password = password.slice(0, passwordlenght);
   
    generatePasswordElement.style.display = "block";
    generatePasswordElement.querySelector("h4").innerText = password; 
};


// Eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSimbol
    );
});