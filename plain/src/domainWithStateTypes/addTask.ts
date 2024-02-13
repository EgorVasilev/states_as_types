import {TodoList} from "./todoList";
import {TaskInDraft} from "./task";

export function addTask(todoList: TodoList, task: TaskInDraft): TodoList {
    return [...todoList, task];
}