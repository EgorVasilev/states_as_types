import {Task} from "./index";

export function finishTask(task: Task): Task {
    // problem: we can only finish a task that's in progress state;
    if (task.type !== 'progress') {
        // problem: we need kind of try-catch blocks or Either type (any railway solution)
        throw new Error('Forbidden operation: only "progress" tasks can be finished');
    }

    // problem: we may forget to set optional "finishedAt" value;
    return {...task, type: 'done', finishedAt: new Date()};
}