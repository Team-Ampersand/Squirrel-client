import TanstackProviders from '@/shared/lib/TanstackProviders';
import ToastProvider from '@/shared/lib/ToastProvider';
import '../shared/styles/globals.css';
import { suit } from '@/shared/styles/fonts';

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
