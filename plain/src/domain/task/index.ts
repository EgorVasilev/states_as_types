type TaskType = 'draft' | 'progress' | 'done';

// primitives obsession
export type Task = {
    id: number;
    name: string;
    description: string;
    type: TaskType;
    createdAt: Date;
    // problem: field that exists only in 'done' case
    finishedAt?: Date;
}

export function isFinished(task: Task) {
    return task.type === 'done'
}

export function isDraft(task: Task) {
    return task.type === 'draft'
}

export function isInProgress(task: Task) {
    return task.type === 'progress'
}