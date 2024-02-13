import React from 'react';
import {TodoList} from "./domain/todoList";
import {Task} from "./domain/task";
import {addTask} from "./domain/addTask";
import {removeTask} from "./domain/removeTask";
import {createTask} from "./domain/task/createTask";
import {getDraftTasks, getFinishedTasks, getProgressTasks} from "./domain/getTasks";
import {startTask} from "./domain/task/startTask";
import {finishTask} from "./domain/task/finishTask";
import {updateTask} from "./domain/updateTask";

type ActionType = {
    type: 'add_task' | 'remove_task' | 'start_task' | 'finish_task';
    payload: Task;
}

function todoListReducer(state: TodoList, action: ActionType) {
    switch (action.type) {
        case 'add_task': {
            return addTask(state, action.payload);
        }
        case 'remove_task': {
            return removeTask(state, action.payload);
        }
        case 'start_task': {
            return updateTask(state,  startTask(action.payload));
        }
        case 'finish_task': {
            return updateTask(state, finishTask(action.payload));
        }
    }
}

function App() {
    const [todoList, dispatch] = React.useReducer(todoListReducer, [])

    const onTaskAdd = () => {
        const task = createTask('test ' + todoList.length, 'some text')

        dispatch({type: 'add_task', payload: task});
    }

    const onTaskStart = (task: Task) => {
        // problem: it's possible to make an action with task in progress instead of task in draft
        // take f.e. calling the handler with a button in progress list
        dispatch({type: 'start_task', payload: task})
    }

    const onTaskFinish = (task: Task) => {
        dispatch({type: 'finish_task', payload: task})
    }

    return (
        <div className="App">
            <button onClick={onTaskAdd}>Add a task</button>

            <ul>
                {getDraftTasks(todoList).map(task =>
                    <li key={task.id}>
                        <p>{task.name}</p>
                        <p>{task.description}</p>

                        <button onClick={() => onTaskStart(task)}>Start</button>
                    </li>
                )}
            </ul>

            <ul>
                {getProgressTasks(todoList).map(task =>
                    <li key={task.id}>
                        <p>{task.name}</p>
                        <p>{task.description}</p>

                        <button onClick={() => onTaskFinish(task)}>Finish</button>
                    </li>
                )}
            </ul>

            <ul>
                {getFinishedTasks(todoList).map(task =>
                    <li key={task.id}>
                        <p>{task.name}</p>
                        <p>{task.description}</p>
                        {/* problem: we still have to check existence of finishedAt regardless the fact we used getFinishedTasks useCase, checking with isFinished won't help  */}
                        {task.finishedAt && <p>{task.finishedAt.toDateString()}</p>}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default App;
