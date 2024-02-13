import {TodoList} from "./todoList";
import {Task} from "./task";

export function addTask(todoList: TodoList, task: Task): TodoList {
    return [...todoList, task];
}