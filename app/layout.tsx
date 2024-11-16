import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import Theme from '@/components/Theme'
import { oswald } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'Bankrot102'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={oswald.className}>
        <Theme>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Theme>
      </body>
    </html>
  )
}