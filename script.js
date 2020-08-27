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
    toggleUtilBtn()
}

function clearDone(){
    $('#ulTasks .done').remove()
}

inpNewTask.keypress((e) =>{
    if(e.which == 13) addItem();
    toggleAddBtn()
    toggleResetBtn()
})

function toggleUtilBtn(){
    btnSort.prop('disabled', ulTasks.children().length <1)
    btnCleanup.prop('disabled', ulTasks.children().length <1)
}

function toggleResetBtn(enabled){
    if(enabled) btnReset.prop('disabled', false)
    else btnReset.prop('disabled', true)
}

function toggleAddBtn(enabled){
    if(enabled) btnAdd.prop('disabled', false)
    else btnAdd.prop('disabled', true)
}

inpNewTask.on('input', () =>{
    toggleResetBtn(inpNewTask.val() != "")
    toggleAddBtn(inpNewTask.val()!="")
})

btnAdd.click(() =>{
    addItem()
    toggleAddBtn()
    toggleResetBtn()
})

btnReset.click(() => {
    inpNewTask.val("")
    toggleResetBtn()
    toggleAddBtn()
})

btnCleanup.click(() =>{
    clearDone()
    toggleUtilBtn()
})

btnSort.click(() =>{
    $('#ulTasks .done').appendTo(ulTasks)
})