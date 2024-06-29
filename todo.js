import inquirer from "inquirer";
let todos = ["coding", "gym"];
async function createtodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an option",
            name: "option",
            choices: ["add", "update", "view", "delete"],
        });
        if (ans.option === "add") {
            let addMore = await inquirer.prompt({
                type: "input",
                message: "add task in ther todo list",
                name: "addmore",
            });
            todos.push(addMore.addmore);
            todos.forEach((addMore) => console.log(addMore));
        }
        if (ans.option === "update") {
            let updatemore = await inquirer.prompt({
                type: "list",
                message: "update task in the list",
                name: "todos",
                choices: todos.map((item) => (item))
            });
            let addmore = await inquirer.prompt({
                type: "input",
                message: "add item in the list",
                name: "todo",
            });
            let newtask = todos.filter((val) => val !== updatemore.todos);
            todos = [...newtask, addmore.todo];
        }
        if (ans.option === "view") {
            console.log("** TO DO LIST**");
            console.log(todos);
            console.log("**************************");
        }
        if (ans.option === "delete") {
            let deleteTask = await inquirer.prompt({
                type: "list",
                message: "delete task from list",
                name: "deletetask",
                choices: todos.map((item) => (item))
            });
            let newtask = todos.filter((val) => val !== deleteTask.deletetask);
            todos = [...newtask];
            console.log(todos);
        }
    } while (true);
}
createtodo(todos);
