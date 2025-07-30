import { parseAppSegmentConfig } from "next/dist/build/segment-config/app/app-segment-config"

export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    //...
}