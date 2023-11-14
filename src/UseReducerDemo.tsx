import { useReducer, useState } from "react";

type Todo = {
    id: number;
    todo: string;
    completed: boolean;
}

const initialState: Todo[] = [
    { id: 1, todo: 'Köp mjölk', completed: false },
    { id: 2, todo: 'Mata katten', completed: true },
];

const getNextId = (todos) => todos.sort((a, b) => b.id - a.id)[0].id + 1;

const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

const toggleCompleted = (id: number) => ({
    type: TOGGLE_COMPLETED,
    payload: id
})

const addTodo = (todo: string) => ({
    type: ADD_TODO,
    payload: todo
})

const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: id
})

const reducer = (state: Todo[], action): Todo[] => {
    switch (action.type) {
        // { type: 'TOGGLE_COMPLETED', payload: 2 }
        case TOGGLE_COMPLETED:
            return state.map(todo => todo.id !== action.payload ? todo : { ...todo, completed: !todo.completed })
        case ADD_TODO:
            // { type: 'ADD_TODO', payload: 'Köp mjölk' }
            return [...state, { id: getNextId(state), todo: action.payload, completed: false }];
        case REMOVE_TODO:
            // { type: 'REMOVE_TODO', payload: 2 }
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

const UseReducerDemo = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [newTodo, setNewTodo] = useState("");

    const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        dispatch(addTodo(newTodo));
        setNewTodo('');
    }

    return <div>
        <h1>My todolist</h1>
        <ul>
            {state.map(todo => <li key={todo.id}>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.todo}</span><button onClick={() => dispatch(toggleCompleted(todo.id))}>Toggle completed</button>
                <button onClick={() => dispatch(removeTodo(todo.id))}>Ta bort</button>
            </li>)}
        </ul>
        <div>
            <form onSubmit={onFormSubmit}>
                <label>New todo:</label>
                <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
                <button type="submit">Add todo</button>
            </form>
        </div>
    </div>
}

export default UseReducerDemo;