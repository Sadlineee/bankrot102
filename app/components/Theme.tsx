'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

type ThemeProps = {
  children: ReactNode
}

export default function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}