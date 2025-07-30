'use client'

import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);


return (
    <div>
        <p>{count} likes</p>
        <button onClick={() => setCount (count +1)}>Click Me</button>
    </div>
)
}