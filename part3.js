var myClass = /** @class */ (function () {
    function myClass() {
        this.myArray = [];
    }
    myClass.prototype.listAllTasks = function () {
        console.log(this.myArray);
    };
    myClass.prototype.addtask = function (task) {
        this.myArray.push(task);
        console.log(task + " has been pushed to the array");
        return this.myArray.length;
    };
    myClass.prototype.deleteTask = function (task) {
        var index = this.myArray.indexOf(task);
        this.myArray.splice(index, 1);
        console.log(task + " has been deleted");
        return this.myArray.length;
    };
    return myClass;
}());
var Hugo = new myClass();
Hugo.addtask("UWU");
Hugo.addtask("Hippopotamus");
Hugo.listAllTasks();
Hugo.deleteTask("UWU");
Hugo.listAllTasks();
