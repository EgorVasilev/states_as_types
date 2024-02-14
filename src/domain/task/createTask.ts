import {Task} from "./index";

export function createTask(name: string, description: string): Task {
    return {id: Date.now(), name, description, createdAt: new Date(), type: 'draft'}
}