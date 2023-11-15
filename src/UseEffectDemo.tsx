import { useEffect, useState } from "react";


const DisplayWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(
        () => {
            console.log('adding event listener');
            window.addEventListener('resize', handleResize)

            return () => {
                window.removeEventListener('resize', handleResize);
            }
        },
        []
    )

    return <>Skärmbredd: {width}px</>
}

export const UseEffectDemo = () => {

    const [secondsLeft, setSecondsLeft] = useState(60);
    const [showDisplayWidth, setShowDisplayWidth] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('interval reached')
            if (secondsLeft > 0) {
                setSecondsLeft(secondsLeft - 1)
            }
        }, 1000)

        return () => {
            //Uppstädning vid unmount
            clearInterval(interval);
        }

    }, [secondsLeft]);

    return <>
        <h1>Use effect demo</h1>
        {secondsLeft}
        <button onClick={() => setSecondsLeft(60)}>Reset</button>

        <button onClick={() => setShowDisplayWidth(!showDisplayWidth)}>
            {showDisplayWidth ? 'Dölj' : 'Visa'}
        </button>
        {showDisplayWidth && <DisplayWidth />}
    </>
}