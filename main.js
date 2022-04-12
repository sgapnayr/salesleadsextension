
let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

localStorage.setItem("myLeads", "www.example.com");
localStorage.getItem("myLeads");
localStorage.clear()

inputBtn.addEventListener('click', () => {
        myLeads.push(inputEl.value);
        inputEl.value= "";
        renderLeads();
});

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a href='" + myLeads[i] + "'target=_blank'>" + myLeads[i] + "</a></li>"
        listItems += 
                    `<li>
                        <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
                    </li>`
    }
    ulEl.innerHTML = listItems;
}
