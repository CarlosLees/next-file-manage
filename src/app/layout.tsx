import type { Metadata } from 'next';
import React from 'react';

import '@/style/index.css';
import Navbar from '@/components/navBar/Navbar';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
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
                <Header />
                {children}
            </body>
        </html>
    );
}