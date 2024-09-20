const btnEle = document.querySelector('.btn');
const inputEle = document.querySelector('#input-field')
const taskEle = document.querySelector('.list-item')


btnEle.addEventListener('click', () => {
    // console.log("I am Clicked")
    // console.log(inputEle.value)
    if (inputEle.value === "") {
        alert("Enter Some Task")
    } else {
        let listEle = document.createElement('li')
        listEle.innerHTML = inputEle.value
        taskEle.appendChild(listEle)

        let spanEle = document.createElement('span')
        spanEle.textContent = "\u00d7"
        listEle.appendChild(spanEle)
    }
    inputEle.value = ""
    saveEle()
})

taskEle.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked")
        saveEle()
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove()
    saveEle()
    }

})

function saveEle() {
    localStorage.setItem("task", taskEle.innerHTML)
}

function getEle() {
    taskEle.innerHTML = localStorage.getItem("task")

}

getEle()