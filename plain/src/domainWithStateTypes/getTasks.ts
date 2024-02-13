import {TodoList} from "./todoList";
import {isDraft, isFinished, isInProgress,TaskFinished, TaskInDraft, TaskInProgress} from "./task";

// problem: how to express that the resulting list is nothing but only draft tasks?
// solved: expressed with the new types
export function getDraftTasks(todoList: TodoList): TaskInDraft[] {
    return todoList.filter(isDraft)
}

export function getProgressTasks(todoList: TodoList): TaskInProgress[] {
    return todoList.filter(isInProgress)
}

export function getFinishedTasks(todoList: TodoList): TaskFinished[] {
    return todoList.filter(isFinished)
}