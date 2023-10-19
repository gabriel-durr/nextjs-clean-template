'use client'

import { ReactNode } from 'react'

import { ChakraProvider } from './chakra-provider'

export const Providers = ({ children }: Record<'children', ReactNode>) => {
	return <ChakraProvider>{children}</ChakraProvider>
}
