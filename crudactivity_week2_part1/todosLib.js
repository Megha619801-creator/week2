
// {
//     "task": "Buy groceries",
//     "completed": false,
//     "dueDate": "2025-08-30"
// }
let todosArray = [];
let nextId = 1;

function getAll() {
    return todosArray;
}

function addOne(task, completed, dueDate) {
    //checking if any parameter is empty or undefined
    if (!task || !completed || !dueDate) {
        return false;
    }

    const newTodos = {
        id: nextId++,
        task,
        completed,
        dueDate
    };

    todosArray.push(newTodos); //add newTodos to array
    return newTodos; //give added todos object
}


function findById(id) {
    const todos = todosArray.find((item) => item.id ==id);
    if (todos) {
        return todos;
    }
    else {
        return false; // alternative code of return todos || false;
    }
}


function updateOneById(id, updatedData) {
    const todos = findById(id);
    if (todos) {
        //update propertied only if provided in updated data
        if (updatedData.task) {
            todos.task = updatedData.task
        }
        if (updatedData.completed) {
            todos.completed = updatedData.completed
        }
        if (updatedData.dueDate) {
            todos.dueDate = updatedData.dueDate
        }
        return todos;
    }
    return false
}


function deleteOneById(id) {
    const todos = findById(id) ;
    if (todos) {
        const initialLength = todosArray.length;
        todosArray = todosArray.filter((todos) => todos.id != id) ;
        return todosArray.length < initialLength;
    }
    return false;
}

//testing the module

if (require.main === module) {
    //Add task
    let result = addOne("do some shopping", "True", "2025-08-08");
    console.log(result);
    result = addOne("jhdfjhf", "false", "2025-07-09");
    console.log(result);
    console.log("getAll called:" , getAll());


    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { task: "brush teeth", completed: "True" }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}

const todos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = todos;
