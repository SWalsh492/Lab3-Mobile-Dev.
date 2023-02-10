interface myInterface{
    myArray: Array<string>;
    
    addtask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;

}

class myClass implements myInterface{
    myArray:Array<string> = [];

    listAllTasks(): void {
        console.log(this.myArray);
    }

    addtask(task: string): number {
        this.myArray.push(task);
        console.log(task + " has been pushed to the array"); 
        return this.myArray.length;
    }

    deleteTask(task: string): number {
        let index= this.myArray.indexOf(task);
        this.myArray.splice(index, 1);
        console.log(task + " has been deleted");
        return this.myArray.length;
    }
    
}

let Hugo = new myClass();
Hugo.addtask("UWU");
Hugo.addtask("Hippopotamus");
Hugo.listAllTasks();
Hugo.deleteTask("UWU");
Hugo.listAllTasks();

