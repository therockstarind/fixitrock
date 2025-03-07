'use client'
import { Tab, Tabs as UiTabs } from '@heroui/react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Gallery } from './showcase/gallery'
import { Quotes } from './showcase/quotes'

export default function Tabs({ username }: { username: string }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentTab = searchParams.get('tab') || 'home'

    return (
        <UiTabs
            classNames={{
                base: 'w-full border-b',
            }}
            selectedKey={currentTab}
            variant='underlined'
            onSelectionChange={(key) => {
                router.push(`?tab=${key}`, { scroll: false })
            }}
        >
            <Tab key='home' title='Home'>
                <Gallery username={username} />
            </Tab>
            <Tab key='posts' title='Posts' />
            <Tab key='quotes' title='Quotes'>
                <Quotes />
            </Tab>
            <Tab key='photos' title='Photos' />
            <Tab key='videos' title='Videos' />
            <Tab key='about' title='About' />
        </UiTabs>
    )
}
