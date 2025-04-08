import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme/theme';
import { CssBaseline } from '@mui/material';
import { GlobalStorage } from '@/storage/GlobalStorage';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Tabela Fipe',
  description: 'Teste da Tabela Fipe para Mobiauto',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={roboto.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStorage>{children}</GlobalStorage>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
