import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Provider from '../components/Provider';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewNavbar from '../components/newNavbar';
import NewFooter from '../components/NewFooter';

const montserrat = Montserrat({ subsets: ['latin'],
display: 'swap' });

export const metadata: Metadata = {
    title: 'Phoenix Creed Academy',
    description: 'Learn forex quick and easy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={montserrat.className}>
                
                {/* <Provider> */}
                <NewNavbar />
                    {children}
                {/* </Provider> */}
                <NewFooter />
            </body>
        </html>
    );
}
