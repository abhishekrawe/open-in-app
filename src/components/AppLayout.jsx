import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useState } from 'react';
import UploadCsv from './UploadCsv';

export default function AppLayout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='grid h-screen grid-cols-1 tablet:grid-cols-[224px_minmax(300px,_1fr)] grid-rows-[auto_minmax(300px,_1fr)]'>
            <Header setMobileMenuOpen={setMobileMenuOpen} />
            <Sidebar
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <main className='flex-1 p-4 tablet:p-8'>
                <div className='mx-auto'>
                    <UploadCsv/>
                </div>
            </main>
        </div>
    );
}
