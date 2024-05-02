const list = document.getElementById("list-container");

export const saveData = () =>{
    localStorage.setItem('data', list.innerHTML)
}

export const showTask = () => {
    list.innerHTML = localStorage.getItem('data')
}