const ul = document.querySelector("ul");
const input = document.querySelector("input");

input.addEventListener("change", searchPersons);


const persons = [
    {
        first_name: "Carlos",
        last_name: "Jhon"
    },
    {
        first_name: "Becky",
        last_name: "Tremor"
    },
    {
        first_name: "Francis",
        last_name: "Caller"
    },
    {
        first_name: "Agustina",
        last_name: "Gomez"
    }
]

function renderPersons(persons) {
    ul.innerHTML = "";
    persons.map(person => {
        let li = document.createElement("li");
        li.innerHTML = `First Name: ${person.first_name} - Last Name: ${person.last_name}`;
        ul.append(li);
    });
}

renderPersons(persons);

function searchPersons(){
    let inputValue = input.value.toLowerCase();
    let matches = persons.filter(p => p.first_name.toLowerCase().includes(inputValue) || p.last_name.toLowerCase().includes(inputValue));
    renderPersons(matches);
}