import Navbar from '../Navbar';
import Head from 'next/head';
import Link from 'next/link';

// Export the Layout component with a children prop
export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <footer>
                <Link passHref href="https://stationarystation.checklyhq.com" className='checkly'>StationSite Status</Link>
            </footer>
        </>
    )
};