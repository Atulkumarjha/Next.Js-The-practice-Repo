'use client'

import { useLinkStatus } from 'next/link'

export default function LoadingIndicator() {
    const { pending } = useLinkStatus()
    return pending ? (
        <div role="status" aria-lable="Loading" className="spinner" />
    ): null
}