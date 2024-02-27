'use client'

import { config, projectId } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { ReactNode } from 'react'
import { State, WagmiProvider } from 'wagmi'


const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')


createWeb3Modal({
    wagmiConfig: config,
    projectId,

})

export function ContextProvider({
    children,
    initialState
}: {
    children: ReactNode
    initialState?: State
}) {
    return (
        <WagmiProvider config={config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}