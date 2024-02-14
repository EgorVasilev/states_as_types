
export type Task = TaskInDraft | TaskInProgress | TaskFinished

// primitives obsession
export type TaskInDraft = {
    id: number;
    name: string;
    description: string;
    type: 'draft';
    createdAt: Date;
}

// primitives obsession
export type TaskInProgress = {
    id: number;
    name: string;
    description: string;
    type: 'progress';
    createdAt: Date;
}

// primitives obsession
export type TaskFinished = {
    id: number;
    name: string;
    description: string;
    type: 'done';
    createdAt: Date;
    // problem: field that exists only in 'done' case
    // solved: other states know nothing about the field
    finishedAt: Date;
}

export function isFinished(task: Task): task is TaskFinished {
    return task.type === 'done'
}

export function isDraft(task: Task): task is TaskInDraft {
    return task.type === 'draft'
}

export function isInProgress(task: Task): task is TaskInProgress {
    return task.type === 'progress'
}