import {TodoList} from "./todoList";
import {Task} from "./task";

export function removeTask(todoList: TodoList, taskToRemove: Task): TodoList {
    return todoList.filter(task => task.id !== taskToRemove.id);
}