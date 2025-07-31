'use client'

import { useState } from 'react'
import { Carousel } from 'acme-carousel'

export default function Gallery() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
        <button onClick={() => setIsOpen(true)}>View Pictures</button>
        {isOpen && <Carousel />}
        </div>
    )
}