import { useState } from 'react'

export const StringAdder = () => {
    const [string, setString] = useState("");

    const greeting = () => setString("Greetings!");
    const farewell = () => setString("Farewell you!");

    return (
        <div>
            <p>The module says: {string}</p>
            <button onClick={greeting}>Hello</button>
            <button onClick={farewell}>Bye</button>
        </div>
    )
}