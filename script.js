let ulTasks = $("#ulTasks")
let inpNewTask = $("#inpNewTask")
let btnAdd = $("#btnAdd")
let btnClear = $("#btnClear")

btnAdd.click(() => {
    let listItem = $('<li>',{
        'class' : 'list-group-item',
        text : inpNewTask.val()
    })
    if(inpNewTask.val() != ""){
        ulTasks.append(listItem)
    }
    inpNewTask.val("")
})

btnClear.click(() => {
    inpNewTask.val("")
})