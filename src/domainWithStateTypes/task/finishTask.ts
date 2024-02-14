import {TaskFinished, TaskInProgress} from "./index";

export function finishTask(task: TaskInProgress): TaskFinished {
    // problem: we can only finish a task that's in progress state;
    // solved: TaskInProgress type
    // problem: we need kind of try-catch blocks or Either type
    // solved: now we can postpone creating of these "safety" operations (controversial decision due to the Postel's Principle that's debatable itself)

    // problem: we may forget to set an optional "finishedAt" value;
    // solved: TaskFinished as returning type checks the "finishedAt" value;
    return {...task, type: 'done', finishedAt: new Date()};
}