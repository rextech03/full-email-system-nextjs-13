
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from './components/Provider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Phoenix Creed Academy',
    description: 'Learn forex quick and easy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                
                <Provider>
                <Navbar />
                    {children}
                </Provider>
                <Footer />
            </body>
        </html>
    );
}
