'use client';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '@/config/site-config';
import { HiBolt } from 'react-icons/hi2';

function NotInterestedContent() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    useEffect(() => {
        if (email) {
            fetch('/api/submit-no', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            }).catch(err => console.error('Error reporting No:', err));
        }
    }, [email]);

    return (
        <main style={{
            backgroundColor: '#fff',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            fontFamily: 'var(--font-inter), sans-serif'
        }}>
            <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
                <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', backgroundColor: '#FFBF00', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <HiBolt style={{ color: 'white', fontSize: '20px' }} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: '600', color: '#0A192F' }}>
                        Darling Electric
                    </span>
                </div>
                <h1 style={{ fontSize: '3.5rem', color: '#FFBF00', fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>No problem at all.</h1>
                <p style={{ fontSize: '1.2rem', color: '#64748b' }}>If you ever change your mind, we're here to help you grow. Have a great day!</p>
            </div>
        </main>
    );
}

export default function NotInterested() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NotInterestedContent />
        </Suspense>
    );
}
