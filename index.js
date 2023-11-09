const addCard = document.querySelectorAll('.add-card')
let toDoList = document.querySelector('.to-do-list')
const modal = document.querySelector('#modal-form')
const formSumbit = document.querySelector('#form-submit')
let inProgress = document.querySelector('.in-progress')
let stuck = document.querySelector('.stuck')
const search = document.querySelector('.searching')
const toDoListBtn = document.querySelectorAll('.toDoListBtn')

toDoListBtn.forEach((e)=>{
    e.addEventListener('click', ()=>{
        console.log("ajilj baina");
    })
})

let searchingValue = "";
let data = [
    {
        title: "garah",
        discription: "yag yuch yum be",
        periority: "High",
        status: "To do"
    },
    {
        title: "medehgui",
        discription: "yag yuch yum be",
        periority: "High",
        status: "In progress"
    },
    {
        title: "medehgui",
        discription: "yag yuch yum be",
        periority: "High",
        status: "Stuck"
    },
];

const setData = (arr) => {
    const dataWithId = arr.map((item, index) => {
        return { ...item, id: "id" + index }
    })

    data = dataWithId
    console.log(data);
    render()
}
const setSearchValue = (newValue) => {
    searchingValue = newValue;
    render()
}
search.addEventListener("input", (event) => {
    setSearchValue(event.target.value)
})

const toDoListItems = (props) => {
    return `
    <div class="to-do-list-items">
        <p>${props.title}</p>
        <p>${props.discription}</p>
        <span>${props.periority}</span>
        <button id="${props.id}" class ="toDoListBtn">Delete me</button>
    </div>
    `
}
const render = () => {
    toDoList.innerHTML = "";
    inProgress.querySelector(".to-do-list").innerHTML = "";
    stuck.querySelector(".to-do-list").innerHTML = "";

    const filteredData = data.filter((item) => {
        return item.title.includes(searchingValue)
    })


    const todoData = filteredData.filter((a) => a.status == "To do");
    todoData.forEach((item) => { toDoList.innerHTML += toDoListItems(item) });

    const inProgressData = filteredData.filter((a) => a.status == "In progress");
    inProgressData.forEach((item) => { inProgress.querySelector(".to-do-list").innerHTML += toDoListItems(item) });

    const stuckData = filteredData.filter((a) => a.status == "Stuck");
    stuckData.forEach((item) => { stuck.querySelector(".to-do-list").innerHTML += toDoListItems(item) });
}

render()

addCard.forEach((e) => {
    e.addEventListener('click', (event) => {
        modal.style.display = 'block'
        event.preventDefault
    })
})

const form = document.querySelector('form')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = event.target.elements.title.value

    const discription = event.target.elements.formDiscription.value

    const periority = event.target.elements.formPriority.value

    const status = event.target.elements.formStatus.value

    const newData = [...data, { title: title, discription: discription, periority: periority, status: status }]

    setData(newData)
    modal.style.display = 'none'
})

