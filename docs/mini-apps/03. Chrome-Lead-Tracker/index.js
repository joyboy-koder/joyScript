const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))

let myLeads = []

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage

    render(myLeads)
}

saveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLead", JSON.stringify(myLeads))

    render(myLeads)

})

tabBtn.addEventListener("click", function () {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        inputEl.value = ""

        localStorage.setItem("myLead", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(lead) {
    let listItems = "";
    for (let i = 0; i < lead.length; i++) {

        listItems += `
        <li>
          <a href="${lead[i]}" target="_blank">
           ${lead[i]}
          </a>
        </li>`
        ulEl.innerHTML = listItems + " "
    }
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    ulEl.innerHTML = ""
    render(myLeads)
})