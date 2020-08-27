let ulTasks = $("#ulTasks")
let inpNewTask = $("#inpNewTask")
let btnAdd = $("#btnAdd")
let btnClear = $("#btnClear")

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


inpNewTask.keypress((e) =>{
     if(e.which == 13) addItem();
})

btnAdd.click(addItem)

btnClear.click(() => {
    inpNewTask.val("")
})