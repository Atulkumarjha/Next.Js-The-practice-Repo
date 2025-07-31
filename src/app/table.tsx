export default function Table({
    searchParams,
}: {
    searchParams: Promise<{ sort: string }>
}) {
    const sort = (await searchParams).sort === 'true'
    return '...'
}