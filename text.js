const cards = document.querySelector(".cards");
const modal = document.querySelector(".modal");
const addBtn = document.querySelector("#add-btn");
const form = document.querySelector("form");
const search = document.querySelector("#search");

let data = [
 {
 title: "Card 1",
 priority: 1,
 },
 {
 title: "Card 2",
 priority: 2,
 },
];
let data2 = [];
const setData = (arr) => {
 data = arr;
 render();
};
const render = () => {
 cards.innerHTML = "";
 data.forEach((item) => {
 cards.innerHTML += Card(item);
 });
};
const Card = (props) => {
 return `
 <div class="card">
 <h3>${props.title}</h3>
 </div>
 `;
};
render();

addBtn.addEventListener("click", () => {
 modal.style.display = "flex";
});
form.addEventListener("submit", (event) => {
 event.preventDefault();
 const { elements } = event.target;
 const titlex = elements["title"].value;
 const newData = [...data, { title: titlex }];
 setData(newData);
 modal.style.display = "none";
});