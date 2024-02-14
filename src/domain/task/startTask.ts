import {Task} from "./index";

export function startTask(task: Task): Task {
    // problem: we can only start a task in draft state;
    if (task.type !== 'draft') {
        // problem: we need kind of try-catch blocks
        throw new Error('Forbidden operation: only draft tasks can be started');
    }

    return {...task, type: 'progress'};
}