
const setup = () => {
    let gallery = document.querySelector("#lstIngredients");

    for (let i = 0; i < gallery.children.length ; i++) {
        gallery.children[i].addEventListener("click", deleteListItem);
    }
}

const deleteListItem = (event) => {
    let gallery = document.querySelector("#lstIngredients");

    let listItem = event.target;
    gallery.removeChild(listItem);
}

window.addEventListener('load', setup);
