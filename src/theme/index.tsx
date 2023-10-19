import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const styles = {
	global: (props: StyleFunctionProps) => ({
		body: {
			fontFamily: 'body',
			overflowX: 'hidden',
			color: mode('gray.900', 'gray.100')(props),
			bg: mode('white', 'gray.700')(props)
		},
		a: {
			color: mode('gray.900', 'gray.100')(props),
			fontFamily: 'heading',
			_hover: {
				transition: 'all 0.4s',
				filter: 'opacity(0.8)',
				textDecoration: 'none !important'
			}
		},
		'*:focus': {
			outline: 'none !important'
		},
		'*:focus-visible': {
			boxShadow: `0 0.5px 12px -2px ${mode('primary.gold', 'primary.rubi')(props)} !important`,
			border: `1px solid ${mode('primary.gold', 'primary.rubi')(props)} !important`
		},
		scrollBehavior: 'smooth',
		'*::-webkit-scrollbar': {
			w: '6px',
			bg: mode('gray.100', 'gray.900')(props)
		},
		'*::-webkit-scrollbar-thumb': {
			bg: mode('gray.900', 'gray.700')(props),
			borderRadius: '2px'
		},
		'*::placeholder': {
			color: mode('gray.400', 'whiteSpace.500')(props)
		}
	})
}

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false
}

const fonts = {
	heading: 'Roboto, sans-serif',
	body: 'Roboto, sans-serif'
}

const colors = {
	primary: {
		grayish: '#9699B0',
		rubi: '#f2535e',
		stormy: '#5f7273',
		gold: '#FFD700'
	}
}

const theme = extendTheme({
	config,
	styles,
	colors,
	fonts
})

export default theme
