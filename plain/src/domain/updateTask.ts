import {TodoList} from "./todoList";
import {Task} from "./task";

export function updateTask(list: TodoList, updatedTask: Task) {
    return list.map(task => task.id === updatedTask.id ? updatedTask : task);
}