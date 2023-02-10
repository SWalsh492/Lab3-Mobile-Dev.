"use strict";
exports.__esModule = true;
var myArray = [];
var count = 0;
addTask("Dance");
addTask("Boogie");
listAllTasks();
deleteTask("Dance");
listAllTasks();
function addTask(task) {
    myArray.push(task);
    console.log(task + " has been pushed to the array");
    return task.length;
}
function listAllTasks() {
    console.log(myArray);
}
function deleteTask(task) {
    var index = myArray.indexOf(task);
    myArray.splice(index, 1);
    console.log(task + " has been deleted");
    return myArray.length;
}
