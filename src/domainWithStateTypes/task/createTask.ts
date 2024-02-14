import {TaskInDraft} from "./index";

export function createTask(name: string, description: string): TaskInDraft {
    return {id: Date.now(), name, description, createdAt: new Date(), type: 'draft'}
}