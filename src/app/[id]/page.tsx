import LikeButton from '@/src/app/ui/like-button'
import { getPost } from '@/src/app/lib/data'

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const  { id } = await params
    const post = await getPost(id)

    return (
        <div>
            <main>
                <h1>{post.title}</h1>
                <LikeButton likes={post.likes} />
            </main>
        </div>
    )
}