let ulTasks = $("#ulTasks")
let inpNewTask = $("#inpNewTask")
let btnAdd = $("#btnAdd")
let btnReset = $("#btnReset")
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')

function addItem(){
    let listItem = $('<li>',{
        'class' : 'list-group-item',
        text : inpNewTask.val()
    })
    if(inpNewTask.val() != ""){
        ulTasks.append(listItem)
    }
    inpNewTask.val("")

    listItem.click(() => {
        listItem.toggleClass('done')
    });
}

function clearDone(){
    $('#ulTasks .done').remove()
}

inpNewTask.keypress((e) =>{
     if(e.which == 13) addItem();
})

btnAdd.click(addItem)

btnReset.click(() => {
    inpNewTask.val("")
})

btnCleanup.click(clearDone)
btnSort.click(() =>{
    $('#ulTasks .done').appendTo(ulTasks)
})