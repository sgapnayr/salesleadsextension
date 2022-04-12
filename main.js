const { links } = require("express/lib/response");

let myLeads = ["asdfa sd", "asdfs adf dsa"];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', () => {
    for (let i = 0; i < myLeads.length; i++) {
        const li = document.createElement("li");
        li.textContent = myLeads[i];
        ulEl.append(li);
    }
});

