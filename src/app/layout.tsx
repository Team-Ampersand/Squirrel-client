import TanstackProviders from '@/lib/TanstackProviders';
import ToastProvider from '@/lib/ToastProvider';
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
        <TanstackProviders>
          <ToastProvider>{children}</ToastProvider>
        </TanstackProviders>
      </body>
    </html>
  );
}
