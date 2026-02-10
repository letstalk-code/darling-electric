'use client';
import { useState } from 'react';
import { siteConfig } from '@/config/site-config';
import { HiBolt } from 'react-icons/hi2';

export default function YesBuild() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
            businessName: (form.elements.namedItem('businessName') as HTMLInputElement).value,
        };

        try {
            const res = await fetch('/api/submit-yes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setIsSuccess(true);
            } else {
                const errorData = await res.json();
                alert(`Submission Failed: ${errorData.error || 'Unknown error'}`);
            }
        } catch (err) {
            console.error(err);
            alert('Connection error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
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
                    <h1 style={{ fontSize: '3rem', color: '#FFBF00', fontFamily: 'var(--font-serif)' }}>Sounds good — <span style={{ color: '#0A192F' }}>I’ll take it from here.</span></h1>
                    <p style={{ fontSize: '1.2rem', color: '#64748b' }}>I’ll finish the website and put it live. I’ll follow up shortly once it’s set up 👍</p>
                </div>
            </main>
        );
    }

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

                <h1 style={{
                    fontSize: '3rem',
                    color: '#FFBF00',
                    fontFamily: 'var(--font-serif)',
                    marginBottom: '20px',
                    lineHeight: '1.1'
                }}>
                    Sounds good — I’ll <span style={{ color: '#0A192F' }}>take it from here.</span>
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: '#64748b',
                    marginBottom: '40px',
                    lineHeight: '1.6'
                }}>
                    I’ll finish the website and put it live. There’s no upfront cost — just a small monthly to keep it running.
                </p>

                <form onSubmit={handleSubmit} style={{
                    backgroundColor: '#F8FAFC',
                    padding: '40px',
                    borderRadius: '24px',
                    textAlign: 'left',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    border: '1px solid #f1f5f9'
                }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#333' }}>Full Name</label>
                        <input required name="name" type="text" placeholder="John Doe" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#333' }}>Email Address</label>
                        <input required name="email" type="email" placeholder="john@example.com" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#333' }}>Phone Number</label>
                        <input required name="phone" type="tel" placeholder="(555) 000-0000" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#333' }}>Business Name</label>
                        <input required name="businessName" type="text" placeholder="Darling Electric" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                    </div>

                    <button type="submit" disabled={isSubmitting} style={{
                        width: '100%',
                        backgroundColor: isSubmitting ? '#cbd5e1' : '#FFBF00',
                        color: '#fff',
                        padding: '20px',
                        borderRadius: '50px',
                        border: 'none',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        boxShadow: isSubmitting ? 'none' : `0 10px 20px rgba(255, 191, 0, 0.2)`
                    }}>
                        {isSubmitting ? 'Sending...' : 'Start My Website'}
                    </button>
                </form>
            </div>
        </main>
    );
}
