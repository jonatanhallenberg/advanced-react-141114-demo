import { memo, useCallback, useState } from "react";

const ChildComponent = memo(({ onButtonClick }: { onButtonClick: React.MouseEventHandler<HTMLButtonElement> }) => {
    console.log('ChildComponent renderas');
    return <button onClick={onButtonClick}>Klicka här!</button>
});

export const ParentComponent = () => {

    const [inputValue, setInputValue] = useState("");
    const [clickCount, setClickCount] = useState(0);

    const handleButtonClick = useCallback(() => {
        setClickCount((prevClickCount) => prevClickCount + 1);
    }, [])


    return (
        <>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} />
            <ChildComponent onButtonClick={handleButtonClick} />
            antal klick: {clickCount}
        </>
    )
}