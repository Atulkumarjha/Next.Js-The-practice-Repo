import { cookies } from 'next/headers'

export async function User() {
    const session = (await cookies()).get('session')?.value
    return '...'
}