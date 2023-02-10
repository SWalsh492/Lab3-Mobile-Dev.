import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

let myArray: String[] = [];
let count: number = 0;
addTask("Dance");
addTask("Boogie");

listAllTasks();

deleteTask("Dance");
listAllTasks();


function addTask(task: string) : number {
    myArray.push(task);
    console.log(task + " has been pushed to the array");

    return task.length;
}

function listAllTasks() {
    console.log(myArray);
}

function deleteTask(task: String): number {
    let index = myArray.indexOf(task);
    myArray.splice(index, 1);
    console.log(task + " has been deleted");
    return myArray.length;

}