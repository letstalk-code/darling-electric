'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '@/config/site-config';
import Link from 'next/link';
import { HiBolt } from 'react-icons/hi2';

function QuickVideoContent() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const emailParam = email ? `?email=${encodeURIComponent(email)}` : '';

    return (
        <main style={{
            backgroundColor: '#fff',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            fontFamily: 'var(--font-inter), sans-serif',
        }}>
            <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
                <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', backgroundColor: '#FFBF00', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <HiBolt style={{ color: 'white', fontSize: '20px' }} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: '600', color: '#0A192F' }}>
                        Darling Electric
                    </span>
                </div>

                {/* Loom Video Placeholder */}
                <div style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    marginBottom: '60px',
                    backgroundColor: '#f1f5f9'
                }}>
                    <iframe
                        src="https://www.loom.com/embed/a5189b6855d94053ac57ce296f42a514"
                        frameBorder="0"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    ></iframe>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    <Link href={`/yes-build${emailParam}`} style={{ textDecoration: 'none' }}>
                        <button style={{
                            backgroundColor: '#FFBF00',
                            color: '#fff',
                            padding: '20px 40px',
                            borderRadius: '50px',
                            border: 'none',
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                            boxShadow: `0 10px 20px rgba(255, 191, 0, 0.2)`
                        }}>
                            YES — Finish & Put It Live
                        </button>
                    </Link>

                    <Link href={`/not-interested${emailParam}`} style={{ textDecoration: 'none' }}>
                        <button style={{
                            backgroundColor: '#f1f5f9',
                            color: '#333',
                            padding: '20px 40px',
                            borderRadius: '50px',
                            border: 'none',
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            opacity: 0.8
                        }}>
                            NO — Not Interested
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default function QuickVideo() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <QuickVideoContent />
        </Suspense>
    );
}
