import type { Metadata } from 'next';
import React from 'react';

import '@/style/index.css';
import Navbar from '@/components/navBar/Navbar';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
    title: 'Next App',
    description: 'Generated by create next app',
    icons: {
        icon: 'favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="container">
                <Navbar />
                <div className="contents">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
