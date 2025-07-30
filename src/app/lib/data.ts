import 'server-only'

export async function getData() {
    const apiKey = process.env.API_KEY ?? '';
    const res = await fetch('https://external-service-.com/data', {
        headers: {
            authorization:  `Bearer ${apiKey}`,
        },
    })

    return res.json()
}