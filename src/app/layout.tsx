import '../styles/globals.css';
import {Oswald, Courier_Prime} from 'next/font/google';
import React from "react";

const oswald = Oswald({subsets: ['latin'], weight: '500', variable: '--font-oswald'});
const courier = Courier_Prime({subsets: ['latin'], weight: ['400'], variable: '--font-courier'});

export const metadata = {
    title: 'Oatly Interview Task',
    description: 'Technical task',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${oswald.variable} ${courier.variable}`}>
        <body>{children}</body>
        </html>
    );
}
