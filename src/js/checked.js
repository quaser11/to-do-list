export const toggleElementValue = (e) =>{
    if(e.target.nodeName != 'LI'){
        return
    }

    e.target.classList.toggle('checked')
}