import { toggleElementValue } from "./checked";
import { addTaskFunction } from "./addtask";
import { deleteButtonFun } from "./deletetask";
import { showTask } from "./savedata";
const _ = require("lodash");

const list = document.getElementById("list-container");
const input = document.getElementById("input-box");
const button = document.getElementById("button");
const removeButton = document.querySelector(".remove-button");

list.addEventListener("click", toggleElementValue);

button.addEventListener("click", addTaskFunction);

list.addEventListener("click", deleteButtonFun);

showTask();

const date = document.querySelector(".date");
const currectDate = new Date();

function getDate() {
  const day = currectDate.getDate();
  const month = currectDate.getMonth() + 1;
  const year = currectDate.getFullYear();

  return `${month}/${day}/${year}`
}

date.innerHTML = getDate()