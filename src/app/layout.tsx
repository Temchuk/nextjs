

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HeaderComponent from '@/components/HeaderComponent';
import { ClientProviders } from '@/components/ClientProviders';
import FooterComponent from "@/components/FooterComponent";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Movies',
    description: 'Generated by create next app',
};

type PropType = { children: React.ReactNode };

export default function RootLayout({ children }: Readonly<PropType>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ClientProviders>
            <HeaderComponent />
            <main style={{ minHeight: 'calc(100vh - 140px)' }}>
                {children}
            </main>
            <FooterComponent />
        </ClientProviders>
        </body>
        </html>
    );
}
