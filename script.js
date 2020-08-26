let ulTasks = $("#ulTasks")
let inpNewTask = $("#inpNewTask")
let btnAdd = $("#btnAdd")
let btnClear = $("#btnClear")

btnAdd.click(() => {
    console.log(inpNewTask.val())
    inpNewTask.val("")
})