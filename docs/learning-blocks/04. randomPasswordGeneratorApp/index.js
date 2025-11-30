const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]<>?,.';

function generate() {

    generatePas()
}

function generatePas() {
    password1 = "";
    password2 = "";
    let length = 15;
    for (let i = 0; i < length; i++) {
        let randomPasOne = Math.floor(Math.random() * characters.length)
        let randomPasTwo = Math.floor(Math.random() * characters.length)
        password1 += characters[randomPasOne]
        password2 += characters[randomPasTwo]
    }
    document.getElementById("input1-el").value = password1
    document.getElementById("input2-el").value = password2
}


window.onload = () => {
    document.getElementById("input1-el").value = "";
    document.getElementById("input2-el").value = "";
};