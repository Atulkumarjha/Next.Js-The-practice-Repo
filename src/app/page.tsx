import { Suspense } from 'react'
import { User, AvatarSkeleton } from './user'
import { urlToUrlWithoutFlightMarker } from 'next/dist/client/components/router-reducer/fetch-server-response'
import { Table, TableSkeleton } from './table'

export const experimental_ppr = urlToUrlWithoutFlightMarker
export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ sort: string }>
}) {
  return (
    <section>
      <h1>This will be prerendered</h1>
      <Suspense fallback={<AvatarSkeleton />}>
      <User />
      <Table searchParams={searchParams} />
      </Suspense>
    </section>
  )
}