"use strict";

const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const list = document.querySelector("ul");

function createListElement () {
    const listElement = document.createElement("li");
    listElement.appendChild(document.createTextNode(input.value));
    list.appendChild(listElement);
    input.value = "";

    function crossOut() {
        listElement.classList.toggle("done");
    };

    listElement.addEventListener("click", crossOut);

    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    listElement.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteListItem);

    function deleteListItem() {
        listElement.classList.add("delete");
    };
};

function addListAfterClick () {
    if (input.value.length > 0) {
        createListElement();
    }
};

function addListafterKeypress (event) {
    if (input.value.length > 0 && event.which === 13) {
        createListElement();
    } 
};

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListafterKeypress);