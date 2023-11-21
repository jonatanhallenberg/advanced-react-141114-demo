import { useState } from "react";

export const Accordion = () => {
    const [open, setOpen] = useState(false);

    return (<>
        <button onClick={() => setOpen(!open)}>{open ? 'Stäng' : 'Öppna'}</button>
        {open && <div>Nu syns jag</div>}
    </>)
}