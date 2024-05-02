import {saveData} from './savedata'

const input = document.getElementById("input-box");
const list = document.getElementById("list-container");

export const addTaskFunction = (e) => {
  if (input.value != "") {
    list.innerHTML += `<li>${input.value}<span class="remove-button">&#215</span></li>`;
  }

  saveData()
};



