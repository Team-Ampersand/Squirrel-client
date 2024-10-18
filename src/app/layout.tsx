import TanstackProviders from '@/lib/TanstackProviders';
import { suit } from '@/styles/fonts';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={suit.variable}>
      <body className="font-SUIT">
        <TanstackProviders>{children}</TanstackProviders>
      </body>
    </html>
  );
}
