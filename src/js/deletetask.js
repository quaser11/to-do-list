import {saveData} from './savedata'

const list = document.getElementById("list-container");

export const deleteButtonFun = (e) => {
  if(e.target.classList.contains('remove-button')){
     e.target.parentElement.remove()
     saveData()
  }
};

