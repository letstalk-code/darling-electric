import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
    title: "Darling Electric | Brooksville Electrician",
    description: "Trusted service since 2001. Safe, reliable electrical work for your home. Watch now.",
    openGraph: {
        title: "Darling Electric | Trusted Electricians",
        description: "Trusted service since 2001. Safe, reliable electrical work for your home. Watch now.",
        type: "website",
        url: "https://darling-electric.vercel.app",
    },
    twitter: {
        card: "summary_large_image",
        title: "Darling Electric | Trusted Electricians",
        description: "Trusted service since 2001.",
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} font-sans`}>
                {children}
            </body>
        </html>
    );
}
