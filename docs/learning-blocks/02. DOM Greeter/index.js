let fullName = document.getElementById("fullName")
let messageEl = document.getElementById("message-el")

function send() {
    let name;
    name = fullName.value
    messageEl.textContent = `Message: Welcome Home ${name}`
}