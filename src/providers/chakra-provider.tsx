'use client'

import { ChakraProvider as RootChakraProvider, ColorModeScript } from '@chakra-ui/react'

import { ReactNode } from 'react'

import theme from '~/theme'

export const ChakraProvider = ({ children }: Record<'children', ReactNode>) => {
	return (
		<RootChakraProvider theme={theme} resetCSS>
			<ColorModeScript initialColorMode={theme.config?.initialColorMode} />
			{children}
		</RootChakraProvider>
	)
}
