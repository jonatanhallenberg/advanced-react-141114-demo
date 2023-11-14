import { useState } from "react";

type Todo = {
    id: number;
    todo: string;
    completed: boolean;
}

const UseStateDemo = () => {

    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, todo: 'Köp mjölk', completed: false },
        { id: 2, todo: 'Mata katten', completed: true },
    ]);

    const [newTodo, setNewTodo] = useState("");

    const toggleCompleted = (id: Todo["id"]) => {
        setTodos((oldTodos) => {
            return oldTodos.map(todo => todo.id !== id ? todo : { ...todo, completed: !todo.completed })
        }
        )
    }

    const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        addTodo();
    }

    const getNextId = () => todos.sort((a, b) => b.id - a.id)[0].id + 1;

    const addTodo = () => {
        setTodos(
            [...todos, { id: getNextId(), todo: newTodo, completed: false }]
        )

        setNewTodo("");
    }

    const removeTodo = (id: number) => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    return <div>
        <h1>My todolist</h1>
        <ul>
            {todos.map(todo => <li key={todo.id}>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.todo}</span><button onClick={() => toggleCompleted(todo.id)}>Toggle completed</button>
                <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
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

export default UseStateDemo;