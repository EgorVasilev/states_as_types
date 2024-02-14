import {TaskInDraft, TaskInProgress} from "./index";

export function startTask(task: TaskInDraft): TaskInProgress {
    return {...task, type: 'progress'};
}