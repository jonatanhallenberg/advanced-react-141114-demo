import { useMemo, useState } from "react";

const heavyCalculation = (num: number) => {
    console.time("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    console.timeEnd("Calculating...");
    return num;
  };

export const TodoList = () => {

    const [todos, setTodos] = useState<string[]>([]);
    const [text, setText] = useState("");
    const [ count, setCount ] = useState(0);

    const calculation = useMemo(() => { heavyCalculation(count) }, [ count ]);
//    const calculation = heavyCalculation(count);

    const addTodo = () => {
        setTodos([ ...todos, text ]);
        setText("");
    }

    return (
        <>
            <ul>
                {todos.map((todo, index) => <li key={index}>
                    {todo}
                </li>)}
            </ul>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={addTodo}>Lägg till</button>
            <h2>Jobbig uträkning</h2>
            {calculation}

            <h2>Count</h2>
            {count}
            <button type="button" onClick={() => setCount((c) => c + 1)}>Öka</button>
        </>
    )

}