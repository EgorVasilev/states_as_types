import {TodoList} from "./todoList";
import {isDraft, isFinished, isInProgress, Task} from "./task";

// problem: how to express that the resulting list is nothing but only draft tasks?
export function getDraftTasks(todoList: TodoList): Task[] {
    return todoList.filter(isDraft)
}

export function getProgressTasks(todoList: TodoList): Task[] {
    return todoList.filter(isInProgress)
}

export function getFinishedTasks(todoList: TodoList): Task[] {
    return todoList.filter(isFinished)
}