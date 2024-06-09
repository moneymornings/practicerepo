import React, { useState } from 'react';

// Building a counter function component
function Counting() {
    // Define state using useState hook
    const [count, setCount] = useState(0); // Initialize count state to 0

    // Function to increase count by 1
    function increase() {
        setCount(count + 1); // Update count state by incrementing by 1
    }

    // Function to decrease count by 1
    function decrease() {
        setCount(count - 1); // Update count state by decrementing by 1
    }

    // Render JSX for the counter component
    return (
        <>
            <h1>Functional Based Component - Counter</h1>
            <p>Count: {count}</p> {/* Display current count */}
            {/* Button to increase count by calling increase function onClick */}
            <button onClick={increase}>+</button>
            {/* Button to decrease count by calling decrease function onClick */}
            <button onClick={decrease}>-</button>
        </>
    );
}

export default Counting; // Export Counting component as the default export