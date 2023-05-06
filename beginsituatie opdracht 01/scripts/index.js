
const setup = () => {
    let gallery = document.querySelector("#lstIngredients");

    for (let i = 0; i < gallery.children.length ; i++) {
        gallery.children[i].addEventListener("click", deleteListItem);
    }
}

const deleteListItem = (event) => {


    let listItem = event.target;
    let list = listItem.parentNode;
    list.removeChild(listItem);
}

window.addEventListener('load', setup);
